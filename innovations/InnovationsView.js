import React from 'react';
import '@splidejs/react-splide/css';
import "./InnovationsView.css";
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';

const InnovationsView = () => {
  return (
    <>
        <div className="innovations-hero">

        </div>
        <div className="container-innovations">
            <div className="innovations-timeline">
                <div class="section__title section__title--carousel">
                    <h2>Roadmap</h2>
                </div>

                <div className="innovations-carousel">
                    <Splide hasTrack={ false } aria-label="..." 
                    className='section__carousel section__carousel--block '
                    options={ {"type":"loop","perPage":3, gap:"30px", speed:1000, perMove:1} }
                    >

                        <div className="splide__arrows">
                            <button class="splide__arrow splide__arrow--prev">
                                <BiLeftArrowAlt/>
                            </button>                
                            <button class="splide__arrow splide__arrow--next">
                                <BiRightArrowAlt/>
                            </button>
                        </div>
                        
                        {/* <div className="roadmap--timeline"></div> */}
                        <SplideTrack>
                                <SplideSlide 
                                // style={{marginRight: "30px", width: "calc(((100% + 30px) / 3) - 30px)"}}
                                >
                                    <div class="roadmap">
                                        <h3 class="roadmap__title">2023 Q1</h3>
                                        <ul class="roadmap__list">
                                            <li>Project start</li>
                                            <li>Tiers system</li>
                                            <li>Tokenomics</li>
                                            <li>Seed round</li>
                                            <li>Aggregator – MVP</li>
                                        </ul>
                                    </div>
                                </SplideSlide>
                                <SplideSlide 
                                // style={{marginRight: "30px", width: "calc(((100% + 30px) / 3) - 30px)"}}
                                >
                                    <div class="roadmap">
                                        <h3 class="roadmap__title">2023 Q2</h3>
                                        <ul class="roadmap__list">
                                            <li>Project start</li>
                                            <li>Tiers system</li>
                                            <li>Tokenomics</li>
                                            <li>Seed round</li>
                                            <li>Aggregator – MVP</li>
                                        </ul>
                                    </div>
                                </SplideSlide>
                                <SplideSlide 
                                // style={{marginRight: "30px", width: "calc(((100% + 30px) / 3) - 30px)"}}
                                >
                                    <div class="roadmap roadmap--active">
                                        <h3 class="roadmap__title">2023 Q3</h3>
                                        <ul class="roadmap__list">
                                            <li>Project start</li>
                                            <li>Tiers system</li>
                                            <li>Tokenomics</li>
                                            <li>Seed round</li>
                                            <li>Aggregator – MVP</li>
                                        </ul>
                                    </div>
                                </SplideSlide>
                                <SplideSlide 
                                // style={{marginRight: "30px", width: "calc(((100% + 30px) / 3) - 30px)"}}
                                >
                                    <div class="roadmap  roadmap--active">
                                        <h3 class="roadmap__title">2023 Q4</h3>
                                        <ul class="roadmap__list">
                                            <li>Project start</li>
                                            <li>Tiers system</li>
                                            <li>Tokenomics</li>
                                            <li>Seed round</li>
                                            <li>Aggregator – MVP</li>
                                        </ul>
                                    </div>
                                </SplideSlide>
                                <SplideSlide 
                                // style={{marginRight: "30px", width: "calc(((100% + 30px) / 3) - 30px)"}}
                                >
                                    <div class="roadmap roadmap--active">
                                        <h3 class="roadmap__title">2024 Q1</h3>
                                        <ul class="roadmap__list">
                                            <li>Project start</li>
                                            <li>Tiers system</li>
                                            <li>Tokenomics</li>
                                            <li>Seed round</li>
                                            <li>Aggregator - MVP</li>
                                        </ul>
                                    </div>
                                </SplideSlide>
                                <SplideSlide 
                                // style={{marginRight: "30px", width: "calc(((100% + 30px) / 3) - 30px)"}}
                                >
                                    <div class="roadmap roadmap--active">
                                        <h3 class="roadmap__title">2024 Q2</h3>
                                        <ul class="roadmap__list">
                                            <li>Project start</li>
                                            <li>Tiers system</li>
                                            <li>Tokenomics</li>
                                            <li>Seed round</li>
                                            <li>Aggregator - MVP</li>
                                        </ul>
                                    </div>
                                </SplideSlide>
                                <SplideSlide 
                                // style={{marginRight: "30px", width: "calc(((100% + 30px) / 3) - 30px)"}}
                                >
                                    <div class="roadmap roadmap--active">
                                        <h3 class="roadmap__title">2024 Q3</h3>
                                        <ul class="roadmap__list">
                                            <li>Project start</li>
                                            <li>Tiers system</li>
                                            <li>Tokenomics</li>
                                            <li>Seed round</li>
                                            <li>Aggregator - MVP</li>
                                        </ul>
                                    </div>
                                </SplideSlide>
                                <SplideSlide 
                                // style={{marginRight: "30px", width: "calc(((100% + 30px) / 3) - 30px)"}}
                                >
                                    <div class="roadmap roadmap--active">
                                        <h3 class="roadmap__title">2024 Q4</h3>
                                        <ul class="roadmap__list">
                                            <li>Project start</li>
                                            <li>Tiers system</li>
                                            <li>Tokenomics</li>
                                            <li>Seed round</li>
                                            <li>Aggregator - MVP</li>
                                        </ul>
                                    </div>
                                </SplideSlide>
                        </SplideTrack>
                        
                    </Splide>
                </div>
            </div>
        </div>
    </>
  )
}

export default InnovationsView