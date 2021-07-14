import React, { useState, useEffect } from "react"
import { assetsImages } from "../constants/images"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from "../component/Loader";
import { ethers } from 'ethers';
import { Inflow } from '../inflow-solidity-sdk/src/Inflow';
import SmallLoader from "../component/SmallLoader";


const LabelArtists = () => {
    const { labelid } = useParams();
    const [label, setlabel] = useState({})
    const [artists, setArtists] = useState([]);
    const [loading, setloading] = useState(false);
    const [artistremain, setartistremain] = useState([]);
    const [tokenPrices, setTokenPrices] = useState({});

    useEffect(() => {
        getlabelartists();
    }, [])

    const getlabelartists = async () => {
        try {
            setloading(true)
            const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/v1/label/getlabelartists`, { labelid })
            setArtists(data.artists);
            setartistremain(data.remainingartists);
            setlabel(data.label);
            setloading(false)
            gettokenprices();
        } catch (error) {
            setloading(false)
            // console.log(error)
        }
    }

    const gettokenprices = async () => {
        try {
            let temp = tokenPrices;
            await Promise.all(artists.map(async (artist) => {
                const p = await fetchTokenPrice(artist.social_token_id);
                temp[artist.social_token_id] = p;
                setTokenPrices(temp)
                temp = tokenPrices;
                return null;
            }));
        } catch (error) {
            // console.log(error)
        }
    }

    async function requestAccount() {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }

    const fetchTokenPrice = async (socialtoken) => {
        if (
            typeof window.ethereum !== 'undefined'
        ) {
            try {
                // // console.log({ SocialTokenAddress })
                await requestAccount();
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                );
                const inflow = new Inflow(provider, 80001);
                const mintPrice = await inflow.getMintPriceSocial(
                    socialtoken,
                    inflow.parseERC20('SocialToken', '1')
                );
                return mintPrice[0];
            } catch (err) {
                // // console.log(err);
            }
        }
    };

    const displayTokenPrice = (socialtoken) => {
        if (tokenPrices[socialtoken]) {
            return tokenPrices[socialtoken];
        }
        return <SmallLoader />
    }

    if (loading) {
        return <Loader />
    }
    return (
        <div className="dashboard-wrapper-main rocnations-artist-main">
            <div className="heading">{`${label.name ? label.name : ''}'s Artists`}</div>
            {/* <div className="small-descriptions">Lorem ipsums main</div> */}

            <div className="gray-cards-main">
                <div className="inner-first-card-row">
                    <img alt="" src={`${process.env.REACT_APP_SERVER_URL}/${label.image}`} width='80' />
                    <div className="col-rights-main">
                        <div className="first-headings">{label.name ? label.name : ''}</div>
                        <div className="songs-name">Artists</div>
                    </div>

                </div>
                <div className="table-main">
                    <table>
                        <thead>
                            <tr>
                                <th className="first-col"></th>
                                <th className="second-col">Name</th>
                                <th className="third-col">Token Price</th>
                                {/* <th className="fourth-col">Superfans</th>
                                <th className="fifth-col">NFTs</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                artists.map((artist) => {
                                    return (
                                        <tr>
                                            <td className="first-col"><img alt="" src={`${process.env.REACT_APP_SERVER_URL}/${artist.profile_image}`} width="80" /> </td>
                                            <td className="second-col">{artist.name ? artist.name : `${artist.first_name} ${artist.last_name ? artist.last_name : ''}`}</td>
                                            <td className="third-col">{displayTokenPrice(artist.social_token_id)}</td>
                                        </tr>
                                    )
                                })
                            }
                            {/* <tr>
                                <td className="first-col"><img alt="" src={assetsImages.artist} /> </td>
                                <td className="second-col">Mike Posner</td>
                                <td className="third-col">$109.78</td>
                                <td className="fourth-col">75,670</td>
                                <td className="fifth-col">61</td>
                            </tr>
                            <tr>
                                <td className="first-col"><img alt="" src={assetsImages.artist} /> </td>
                                <td className="second-col">Meg Thee Stallion</td>
                                <td className="third-col">$105.31</td>
                                <td className="fourth-col">68,014</td>
                                <td className="fifth-col">68,014</td>
                            </tr> */}


                        </tbody>


                    </table>

                </div>


            </div>

        </div>
    )
}

export default LabelArtists