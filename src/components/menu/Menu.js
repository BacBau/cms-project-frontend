import React, { Component } from "react";
import dataService from "../../Network/dataService";
import part1 from '../../images/part-1.webp';
import part2 from '../../images/part-2.webp';
import part3 from '../../images/part-3.webp';
import part4 from '../../images/part-4.webp';
import part5 from '../../images/part-5.webp';
import part6 from '../../images/part-6.webp';
import part7 from '../../images/part-7.webp';
import miniTest from '../../images/mini-test.webp';
import backGround1 from '../../images/background-menu-1.png'
import backGround2 from '../../images/background-menu-2.png'
import backGround3 from '../../images/background-menu-3.png'
import bgReview from '../../images/bg-review.webp'
import review1 from '../../images/review-1.png'
import fb from '../../images/facebook.png'
import yt from '../../images/youtube.png'
import tw from '../../images/twitter.png'

import { Grid, Typography, Button, Container } from '@mui/material';

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        // this.getSelectedChannel = this.getSelectedChannel.bind(this);
    }

    async componentDidMount() {
        window.addEventListener("beforeunload", function (e) {
            dataService.offline();
        });

        //var username = this.props.loggedInUserObj.username.username;
    }

    render() {
        return (
            <div>
                <div className="test-item-panel-header">
                    <span style={{ "boxSizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "#3F979B", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" }}>
                        <img src={backGround1} decoding="async" data-nimg="fill" className="test-tiem-panel-bg-image" style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "objectFit": "cover", "objectPosition": "right center" }} sizes="100vw" />
                    </span>
                    <div className="test-item-panel-main" style={{ "textAlign": "right" }}>
                        <h1 style={{ "position": "absolute", "width": "247px", "height": "51px", "left": "1545px", "top": "102px", "fontFamily": "'Inter'", "fontStyle": "normal", "fontWeight": "700", "fontSize": "64px", "lineHeight": "77px", "textAlign": "right", "color": "#FFFCFC" }}>Boost...</h1>
                        <div style={{ "position": "absolute", "width": "693px", "height": "170px", "left": "1100px", "top": "177px", "fontFamily": "'Inter'", "fontStyle": "normal", "fontWeight": "300", "fontSize": "36px", "lineHeight": "44px", "textAlign": "right", "color": "#FFFCFC" }}>
                            your score TOEIC with<br></br>
                            our online learning platform!
                        </div>
                        <div style={{ "position": "absolute", "width": "412px", "height": "159px", "left": "1380px", "top": "300px", "fontFamily": "'Roboto'", "fontStyle": "normal", "fontWeight": "200", "fontSize": "16px", "lineHeight": "19px", "textAlign": "right", "color": "#FFFFFF" }}>
                            Unlimited number of exams<br></br>
                            Friendly interface, easy to use, time like real exam<br></br>
                            Practice for each part of the real exam<br></br>
                            Automatic scoring, detailed assessment of the exam<br></br>
                        </div>
                    </div>
                
                </div>

                <div style={{"display":"flex", "justifyContent":"center", "alignItems":"center", "flexDirection":"column", marginTop:"40px"}}>
                    <div style={{"marginBottom":"20px","marginLeft":"250px","width":"654px","fontFamily":"'Roboto'","fontStyle":"normal","fontWeight":"600","fontSize":"36px","lineHeight":"42px","display":"flex","alignItems":"center","textAlign":"center","color":"#205E61"}}>FREE Online TOEIC Test </div>
                    <div style={{"marginBottom":"40px", "width":"1112px","fontFamily":"'Roboto'","fontStyle":"normal","fontWeight":"300","fontSize":"24px","lineHeight":"28px","display":"flex","alignItems":"center","textAlign":"center","color":"#3F979B"}}>Welcome to our PerfectTOEIC! We are proud to be one of the leading online learning platforms
                        for Toeic test preparation, providing you with quality study materials and free official Toeic tests
                        to help you prepare well. best for the Toeic exam.</div>
                </div>

                <div className="part-container-panel">
                    <div className="part-item" style={{ marginLeft: "330px" }}>
                        <Typography variant="h3" gutterBottom style={{ color: "#205E61", marginTop: "70px" }}>
                            TOEIC Exam Simulator
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item >
                                <div className="test-item-panel">
                                    <span style={{ "boxSizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "#3F979B", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" }}>
                                        {/*<div style={{"background":"#3F979B"}}></div>*/}
                                        {/*<img src={miniTest} decoding="async" data-nimg="fill" className="test-tiem-panel-bg-image" style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "objectFit": "cover", "objectPosition": "right center" }} sizes="100vw" />*/}
                                    </span>
                                    <div className="test-item-panel-main">
                                        <div className="test-item-main-title">MINI TEST</div>
                                        <div className="test-item-main-desc dot-3">Take mini test with the number of questions and time limit reduced by half</div>
                                    </div>
                                    <div className="test-item-func-join-button-wrap">
                                        <a href="/minitest" style={{ "textDecoration": "none", "color": "inherit" }}>
                                            <Button className="test-item-func-join-button">Join</Button>
                                        </a>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item >
                                <div className="test-item-panel">
                                    <span style={{ "boxSizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "#3F979B", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" }}>
                                        {/*<img src={fullTest} decoding="async" data-nimg="fill" className="test-tiem-panel-bg-image" style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "objectFit": "cover", "objectPosition": "right center" }} sizes="100vw" />*/}
                                    </span>
                                    <div className="test-item-panel-main">
                                        <div className="test-item-main-title">FULL TEST</div>
                                        <div className="test-item-main-desc dot-3">Take full test with the same number of questions and time limit as the actual test</div>
                                    </div>
                                    <div className="test-item-func-join-button-wrap">
                                        <a href="/exam" style={{ "textDecoration": "none", "color": "inherit" }}>
                                            <Button className="test-item-func-join-button">Join</Button>
                                        </a>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="part-item" style={{ marginLeft: "330px" }}>
                        <Typography variant="h3" gutterBottom style={{ color: "#205E61", marginTop: "70px" }}>
                            Listening
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item >
                                <a href="practice/?part=1">
                                    <div className="part-item-data">
                                        <div className="part-item-data-avatar-wrap">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="Part 1" src={part1} decoding="async" data-nimg="fill" className="part-item-data-avatar" sizes="75vw" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            </span>
                                        </div>
                                        <div className="part-item-data-content">
                                            <div className="part-item-data-short-name">Part 1</div>
                                            <div className="part-item-data-name">Photos</div>
                                            <div className="part-item-data-desc dot-6">Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.</div>
                                        </div>
                                    </div>
                                </a>
                            </Grid>
                            <Grid item >
                                <a href="practice/?part=2">
                                    <div className="part-item-data">
                                        <div className="part-item-data-avatar-wrap">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="Part 2" src={part2} decoding="async" data-nimg="fill" className="part-item-data-avatar" sizes="75vw" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            </span>
                                        </div>
                                        <div className="part-item-data-content">
                                            <div className="part-item-data-short-name">Part 2</div>
                                            <div className="part-item-data-name">Question Response</div>
                                            <div className="part-item-data-desc dot-6">Three responses to one question or statement will be spoken only one time. Select the best response for the question.</div>
                                        </div>
                                    </div>
                                </a>
                            </Grid>
                            <Grid item >
                                <a href="practice/?part=3">
                                    <div className="part-item-data">
                                        <div className="part-item-data-avatar-wrap">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="Part 3" src={part3} decoding="async" data-nimg="fill" className="part-item-data-avatar" sizes="75vw" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            </span>
                                        </div>
                                        <div className="part-item-data-content">
                                            <div className="part-item-data-short-name">Part 3</div>
                                            <div className="part-item-data-name">Short Conversations</div>
                                            <div className="part-item-data-desc dot-6">Conversations between two or three people will be spoken only one time. Listen to each conversation and select the best response for the question. There are three questions for each conversation.</div>
                                        </div>
                                    </div>
                                </a>
                            </Grid>
                            <Grid item >
                                <a href="practice/?part=4">
                                    <div className="part-item-data">
                                        <div className="part-item-data-avatar-wrap">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="Part 4" src={part4} decoding="async" data-nimg="fill" className="part-item-data-avatar" sizes="75vw" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            </span>
                                        </div>
                                        <div className="part-item-data-content">
                                            <div className="part-item-data-short-name">Part 4</div>
                                            <div className="part-item-data-name">Short Talks</div>
                                            <div className="part-item-data-desc dot-6">Short talks such as announcements or narrations will be spoken only one time. Listen to each talk and select the best response for the question There are three questions for each talk.</div>
                                        </div>
                                    </div>
                                </a>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="part-item" style={{ marginLeft: "330px" }}>
                        <Typography variant="h3" gutterBottom style={{ color: "#205E61", marginTop: "70px" }}>
                            Reading
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item >
                                <a href="practice/?part=5">
                                    <div className="part-item-data">
                                        <div className="part-item-data-avatar-wrap">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="Part 5" src={part5} decoding="async" data-nimg="fill" className="part-item-data-avatar" sizes="75vw" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            </span>
                                        </div>
                                        <div className="part-item-data-content">
                                            <div className="part-item-data-short-name">Part 5</div>
                                            <div className="part-item-data-name">Incompletes Sentences</div>
                                            <div className="part-item-data-desc dot-6">Select the best answer of the four choices to complete the sentence.</div>
                                        </div>
                                    </div>
                                </a>
                            </Grid>
                            <Grid item >
                                <a href="practice/?part=6">
                                    <div className="part-item-data">
                                        <div className="part-item-data-avatar-wrap">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="Part 6" src={part6} decoding="async" data-nimg="fill" className="part-item-data-avatar" sizes="75vw" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            </span>
                                        </div>
                                        <div className="part-item-data-content">
                                            <div className="part-item-data-short-name">Part 6</div>
                                            <div className="part-item-data-name">Text Completion</div>
                                            <div className="part-item-data-desc dot-6">Select the best answer of the four choices (words, phrases, or a sentence) to complete the text. There are four questions for each text.</div>
                                        </div>
                                    </div>
                                </a>
                            </Grid>
                            <Grid item >
                                <a href="practice/?part=7">
                                    <div className="part-item-data">
                                        <div className="part-item-data-avatar-wrap">
                                            <span style={{ boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0px", margin: "0px", padding: "0px", position: "absolute", inset: "0px" }}>
                                                <img alt="Part 7" src={part7} decoding="async" data-nimg="fill" className="part-item-data-avatar" sizes="75vw" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: "cover" }} />
                                            </span>
                                        </div>
                                        <div className="part-item-data-content">
                                            <div className="part-item-data-short-name">Part 7</div>
                                            <div className="part-item-data-name">Reading Comprehension</div>
                                            <div className="part-item-data-desc dot-6">Read a range of different texts and select the best answer of the four choices.There are multiple questions for each text.</div>
                                        </div>
                                    </div>
                                </a>
                            </Grid>
                        </Grid>
                    </div>


                </div>

                <div id="review">
                    <span
                        style={{ "boxSizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" }}>
                        <img
                            alt="background-review-section" sizes="100vw"
                            src={bgReview}
                            decoding="async" data-nimg="fill" className="review-bg"
                            style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "objectFit": "cover", "objectPosition": "center center" }} /></span>
                    <Container>
                        <div className="title-review">
                            <svg width="323" height="83" viewBox="0 0 323 83" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_9_274)">
                                    <path
                                        d="M66.216 74.1825C63.906 74.1825 61.7827 73.6458 59.846 72.5725C57.9327 71.4992 56.4044 70.0058 55.261 68.0925C54.141 66.1558 53.581 63.9858 53.581 61.5825C53.581 59.1792 54.141 57.0208 55.261 55.1075C56.4044 53.1942 57.9327 51.7008 59.846 50.6275C61.7827 49.5542 63.906 49.0175 66.216 49.0175C68.526 49.0175 70.6377 49.5542 72.551 50.6275C74.4877 51.7008 76.0044 53.1942 77.101 55.1075C78.221 57.0208 78.781 59.1792 78.781 61.5825C78.781 63.9858 78.221 66.1558 77.101 68.0925C75.981 70.0058 74.4644 71.4992 72.551 72.5725C70.6377 73.6458 68.526 74.1825 66.216 74.1825ZM66.216 68.7225C68.176 68.7225 69.7394 68.0692 70.906 66.7625C72.096 65.4558 72.691 63.7292 72.691 61.5825C72.691 59.4125 72.096 57.6858 70.906 56.4025C69.7394 55.0958 68.176 54.4425 66.216 54.4425C64.2327 54.4425 62.646 55.0842 61.456 56.3675C60.2894 57.6508 59.706 59.3892 59.706 61.5825C59.706 63.7525 60.2894 65.4908 61.456 66.7975C62.646 68.0808 64.2327 68.7225 66.216 68.7225ZM88.6907 49.3675V64.0675C88.6907 65.5375 89.0523 66.6692 89.7757 67.4625C90.499 68.2558 91.5607 68.6525 92.9607 68.6525C94.3607 68.6525 95.434 68.2558 96.1807 67.4625C96.9273 66.6692 97.3007 65.5375 97.3007 64.0675V49.3675H103.286V64.0325C103.286 66.2258 102.819 68.0808 101.886 69.5975C100.952 71.1142 99.6923 72.2575 98.1057 73.0275C96.5423 73.7975 94.7923 74.1825 92.8557 74.1825C90.919 74.1825 89.1807 73.8092 87.6407 73.0625C86.124 72.2925 84.9223 71.1492 84.0357 69.6325C83.149 68.0925 82.7057 66.2258 82.7057 64.0325V49.3675H88.6907ZM120.718 73.9375L115.608 64.6625H114.173V73.9375H108.188V49.3675H118.233C120.17 49.3675 121.815 49.7058 123.168 50.3825C124.545 51.0592 125.572 51.9925 126.248 53.1825C126.925 54.3492 127.263 55.6558 127.263 57.1025C127.263 58.7358 126.797 60.1942 125.863 61.4775C124.953 62.7608 123.6 63.6708 121.803 64.2075L127.473 73.9375H120.718ZM114.173 60.4275H117.883C118.98 60.4275 119.797 60.1592 120.333 59.6225C120.893 59.0858 121.173 58.3275 121.173 57.3475C121.173 56.4142 120.893 55.6792 120.333 55.1425C119.797 54.6058 118.98 54.3375 117.883 54.3375H114.173V60.4275ZM158.562 57.2775C158.562 58.7008 158.236 60.0075 157.582 61.1975C156.929 62.3642 155.926 63.3092 154.572 64.0325C153.219 64.7558 151.539 65.1175 149.532 65.1175H145.822V73.9375H139.837V49.3675H149.532C151.492 49.3675 153.149 49.7058 154.502 50.3825C155.856 51.0592 156.871 51.9925 157.547 53.1825C158.224 54.3725 158.562 55.7375 158.562 57.2775ZM149.077 60.3575C150.221 60.3575 151.072 60.0892 151.632 59.5525C152.192 59.0158 152.472 58.2575 152.472 57.2775C152.472 56.2975 152.192 55.5392 151.632 55.0025C151.072 54.4658 150.221 54.1975 149.077 54.1975H145.822V60.3575H149.077ZM168.363 54.1625V59.1325H176.378V63.7525H168.363V69.1425H177.428V73.9375H162.378V49.3675H177.428V54.1625H168.363ZM193.634 74.1825C191.324 74.1825 189.2 73.6458 187.264 72.5725C185.35 71.4992 183.822 70.0058 182.679 68.0925C181.559 66.1558 180.999 63.9858 180.999 61.5825C180.999 59.1792 181.559 57.0208 182.679 55.1075C183.822 53.1942 185.35 51.7008 187.264 50.6275C189.2 49.5542 191.324 49.0175 193.634 49.0175C195.944 49.0175 198.055 49.5542 199.969 50.6275C201.905 51.7008 203.422 53.1942 204.519 55.1075C205.639 57.0208 206.199 59.1792 206.199 61.5825C206.199 63.9858 205.639 66.1558 204.519 68.0925C203.399 70.0058 201.882 71.4992 199.969 72.5725C198.055 73.6458 195.944 74.1825 193.634 74.1825ZM193.634 68.7225C195.594 68.7225 197.157 68.0692 198.324 66.7625C199.514 65.4558 200.109 63.7292 200.109 61.5825C200.109 59.4125 199.514 57.6858 198.324 56.4025C197.157 55.0958 195.594 54.4425 193.634 54.4425C191.65 54.4425 190.064 55.0842 188.874 56.3675C187.707 57.6508 187.124 59.3892 187.124 61.5825C187.124 63.7525 187.707 65.4908 188.874 66.7975C190.064 68.0808 191.65 68.7225 193.634 68.7225ZM228.953 57.2775C228.953 58.7008 228.627 60.0075 227.973 61.1975C227.32 62.3642 226.317 63.3092 224.963 64.0325C223.61 64.7558 221.93 65.1175 219.923 65.1175H216.213V73.9375H210.228V49.3675H219.923C221.883 49.3675 223.54 49.7058 224.893 50.3825C226.247 51.0592 227.262 51.9925 227.938 53.1825C228.615 54.3725 228.953 55.7375 228.953 57.2775ZM219.468 60.3575C220.612 60.3575 221.463 60.0892 222.023 59.5525C222.583 59.0158 222.863 58.2575 222.863 57.2775C222.863 56.2975 222.583 55.5392 222.023 55.0025C221.463 54.4658 220.612 54.1975 219.468 54.1975H216.213V60.3575H219.468ZM238.754 69.3175H246.594V73.9375H232.769V49.3675H238.754V69.3175ZM256.134 54.1625V59.1325H264.149V63.7525H256.134V69.1425H265.199V73.9375H250.149V49.3675H265.199V54.1625H256.134Z"
                                        fill="#828AFF"></path>
                                </g>
                                <path d="M27.466 66.2959H1.29834V1.2959H321.298V66.2959H297.57" stroke="#fff"
                                    strokeWidth="2"></path>
                                <path
                                    d="M118.938 18.4275L115.23 30.9375H112.908L110.28 21.4695L107.49 30.9375L105.186 30.9555L101.64 18.4275H103.818L106.41 28.6155L109.218 18.4275H111.522L114.132 28.5615L116.742 18.4275H118.938ZM130.081 25.7355C130.081 26.1075 130.057 26.4435 130.009 26.7435H122.431C122.491 27.5355 122.785 28.1715 123.313 28.6515C123.841 29.1315 124.489 29.3715 125.257 29.3715C126.361 29.3715 127.141 28.9095 127.597 27.9855H129.811C129.511 28.8975 128.965 29.6475 128.173 30.2355C127.393 30.8115 126.421 31.0995 125.257 31.0995C124.309 31.0995 123.457 30.8895 122.701 30.4695C121.957 30.0375 121.369 29.4375 120.937 28.6695C120.517 27.8895 120.307 26.9895 120.307 25.9695C120.307 24.9495 120.511 24.0555 120.919 23.2875C121.339 22.5075 121.921 21.9075 122.665 21.4875C123.421 21.0675 124.285 20.8575 125.257 20.8575C126.193 20.8575 127.027 21.0615 127.759 21.4695C128.491 21.8775 129.061 22.4535 129.469 23.1975C129.877 23.9295 130.081 24.7755 130.081 25.7355ZM127.939 25.0875C127.927 24.3315 127.657 23.7255 127.129 23.2695C126.601 22.8135 125.947 22.5855 125.167 22.5855C124.459 22.5855 123.853 22.8135 123.349 23.2695C122.845 23.7135 122.545 24.3195 122.449 25.0875H127.939ZM141.096 31.0995C140.316 31.0995 139.614 30.9615 138.99 30.6855C138.378 30.3975 137.892 30.0135 137.532 29.5335C137.172 29.0415 136.98 28.4955 136.956 27.8955H139.08C139.116 28.3155 139.314 28.6695 139.674 28.9575C140.046 29.2335 140.508 29.3715 141.06 29.3715C141.636 29.3715 142.08 29.2635 142.392 29.0475C142.716 28.8195 142.878 28.5315 142.878 28.1835C142.878 27.8115 142.698 27.5355 142.338 27.3555C141.99 27.1755 141.432 26.9775 140.664 26.7615C139.92 26.5575 139.314 26.3595 138.846 26.1675C138.378 25.9755 137.97 25.6815 137.622 25.2855C137.286 24.8895 137.118 24.3675 137.118 23.7195C137.118 23.1915 137.274 22.7115 137.586 22.2795C137.898 21.8355 138.342 21.4875 138.918 21.2355C139.506 20.9835 140.178 20.8575 140.934 20.8575C142.062 20.8575 142.968 21.1455 143.652 21.7215C144.348 22.2855 144.72 23.0595 144.768 24.0435H142.716C142.68 23.5995 142.5 23.2455 142.176 22.9815C141.852 22.7175 141.414 22.5855 140.862 22.5855C140.322 22.5855 139.908 22.6875 139.62 22.8915C139.332 23.0955 139.188 23.3655 139.188 23.7015C139.188 23.9655 139.284 24.1875 139.476 24.3675C139.668 24.5475 139.902 24.6915 140.178 24.7995C140.454 24.8955 140.862 25.0215 141.402 25.1775C142.122 25.3695 142.71 25.5675 143.166 25.7715C143.634 25.9635 144.036 26.2515 144.372 26.6355C144.708 27.0195 144.882 27.5295 144.894 28.1655C144.894 28.7295 144.738 29.2335 144.426 29.6775C144.114 30.1215 143.67 30.4695 143.094 30.7215C142.53 30.9735 141.864 31.0995 141.096 31.0995ZM149.865 22.6935V28.1835C149.865 28.5555 149.949 28.8255 150.117 28.9935C150.297 29.1495 150.597 29.2275 151.017 29.2275H152.277V30.9375H150.657C149.733 30.9375 149.025 30.7215 148.533 30.2895C148.041 29.8575 147.795 29.1555 147.795 28.1835V22.6935H146.625V21.0195H147.795V18.5535H149.865V21.0195H152.277V22.6935H149.865ZM153.844 25.9335C153.844 24.9375 154.048 24.0555 154.456 23.2875C154.876 22.5195 155.44 21.9255 156.148 21.5055C156.868 21.0735 157.66 20.8575 158.524 20.8575C159.304 20.8575 159.982 21.0135 160.558 21.3255C161.146 21.6255 161.614 22.0035 161.962 22.4595V21.0195H164.032V30.9375H161.962V29.4615C161.614 29.9295 161.14 30.3195 160.54 30.6315C159.94 30.9435 159.256 31.0995 158.488 31.0995C157.636 31.0995 156.856 30.8835 156.148 30.4515C155.44 30.0075 154.876 29.3955 154.456 28.6155C154.048 27.8235 153.844 26.9295 153.844 25.9335ZM161.962 25.9695C161.962 25.2855 161.818 24.6915 161.53 24.1875C161.254 23.6835 160.888 23.2995 160.432 23.0355C159.976 22.7715 159.484 22.6395 158.956 22.6395C158.428 22.6395 157.936 22.7715 157.48 23.0355C157.024 23.2875 156.652 23.6655 156.364 24.1695C156.088 24.6615 155.95 25.2495 155.95 25.9335C155.95 26.6175 156.088 27.2175 156.364 27.7335C156.652 28.2495 157.024 28.6455 157.48 28.9215C157.948 29.1855 158.44 29.3175 158.956 29.3175C159.484 29.3175 159.976 29.1855 160.432 28.9215C160.888 28.6575 161.254 28.2735 161.53 27.7695C161.818 27.2535 161.962 26.6535 161.962 25.9695ZM172.092 20.8575C172.872 20.8575 173.568 21.0195 174.18 21.3435C174.804 21.6675 175.29 22.1475 175.638 22.7835C175.986 23.4195 176.16 24.1875 176.16 25.0875V30.9375H174.126V25.3935C174.126 24.5055 173.904 23.8275 173.46 23.3595C173.016 22.8795 172.41 22.6395 171.642 22.6395C170.874 22.6395 170.262 22.8795 169.806 23.3595C169.362 23.8275 169.14 24.5055 169.14 25.3935V30.9375H167.088V21.0195H169.14V22.1535C169.476 21.7455 169.902 21.4275 170.418 21.1995C170.946 20.9715 171.504 20.8575 172.092 20.8575ZM178.453 25.9335C178.453 24.9375 178.657 24.0555 179.065 23.2875C179.485 22.5195 180.049 21.9255 180.757 21.5055C181.477 21.0735 182.275 20.8575 183.151 20.8575C183.799 20.8575 184.435 21.0015 185.059 21.2895C185.695 21.5655 186.199 21.9375 186.571 22.4055V17.6175H188.641V30.9375H186.571V29.4435C186.235 29.9235 185.767 30.3195 185.167 30.6315C184.579 30.9435 183.901 31.0995 183.133 31.0995C182.269 31.0995 181.477 30.8835 180.757 30.4515C180.049 30.0075 179.485 29.3955 179.065 28.6155C178.657 27.8235 178.453 26.9295 178.453 25.9335ZM186.571 25.9695C186.571 25.2855 186.427 24.6915 186.139 24.1875C185.863 23.6835 185.497 23.2995 185.041 23.0355C184.585 22.7715 184.093 22.6395 183.565 22.6395C183.037 22.6395 182.545 22.7715 182.089 23.0355C181.633 23.2875 181.261 23.6655 180.973 24.1695C180.697 24.6615 180.559 25.2495 180.559 25.9335C180.559 26.6175 180.697 27.2175 180.973 27.7335C181.261 28.2495 181.633 28.6455 182.089 28.9215C182.557 29.1855 183.049 29.3175 183.565 29.3175C184.093 29.3175 184.585 29.1855 185.041 28.9215C185.497 28.6575 185.863 28.2735 186.139 27.7695C186.427 27.2535 186.571 26.6535 186.571 25.9695ZM200.89 22.6935H199.054V30.9375H196.984V22.6935H195.814V21.0195H196.984V20.3175C196.984 19.1775 197.284 18.3495 197.884 17.8335C198.496 17.3055 199.45 17.0415 200.746 17.0415V18.7515C200.122 18.7515 199.684 18.8715 199.432 19.1115C199.18 19.3395 199.054 19.7415 199.054 20.3175V21.0195H200.89V22.6935ZM207.371 31.0995C206.435 31.0995 205.589 30.8895 204.833 30.4695C204.077 30.0375 203.483 29.4375 203.051 28.6695C202.619 27.8895 202.403 26.9895 202.403 25.9695C202.403 24.9615 202.625 24.0675 203.069 23.2875C203.513 22.5075 204.119 21.9075 204.887 21.4875C205.655 21.0675 206.513 20.8575 207.461 20.8575C208.409 20.8575 209.267 21.0675 210.035 21.4875C210.803 21.9075 211.409 22.5075 211.853 23.2875C212.297 24.0675 212.519 24.9615 212.519 25.9695C212.519 26.9775 212.291 27.8715 211.835 28.6515C211.379 29.4315 210.755 30.0375 209.963 30.4695C209.183 30.8895 208.319 31.0995 207.371 31.0995ZM207.371 29.3175C207.899 29.3175 208.391 29.1915 208.847 28.9395C209.315 28.6875 209.693 28.3095 209.981 27.8055C210.269 27.3015 210.413 26.6895 210.413 25.9695C210.413 25.2495 210.275 24.6435 209.999 24.1515C209.723 23.6475 209.357 23.2695 208.901 23.0175C208.445 22.7655 207.953 22.6395 207.425 22.6395C206.897 22.6395 206.405 22.7655 205.949 23.0175C205.505 23.2695 205.151 23.6475 204.887 24.1515C204.623 24.6435 204.491 25.2495 204.491 25.9695C204.491 27.0375 204.761 27.8655 205.301 28.4535C205.853 29.0295 206.543 29.3175 207.371 29.3175ZM216.959 22.4595C217.259 21.9555 217.655 21.5655 218.147 21.2895C218.651 21.0015 219.245 20.8575 219.929 20.8575V22.9815H219.407C218.603 22.9815 217.991 23.1855 217.571 23.5935C217.163 24.0015 216.959 24.7095 216.959 25.7175V30.9375H214.907V21.0195H216.959V22.4595Z"
                                    fill="#fff"></path>
                                <defs>
                                    <filter id="filter0_d_9_274" x="49.5811" y="49.0175" width="219.618" height="33.165"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"></feColorMatrix>
                                        <feOffset dy="4"></feOffset>
                                        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                        <feComposite in2="hardAlpha" operator="out"></feComposite>
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_9_274"></feBlend>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_274"
                                            result="shape"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <Grid container
                            className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 main-reviewers-slides toeic css-1kcdcv1" style={{ "paddingTop": "200px" }}>
                            <Grid item className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-8 css-11y4xzv">
                                <div
                                    className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-achievement">
                                    <div className="swiper-wrapper"
                                        style={{ "transform": "translate3d(0px, 0px, 0px)", "transitionDuration": "0ms" }}>
                                        <div className="swiper-slide swiper-slide-active"
                                            style={{ "width": "743px", "height": "100%", "marginRight": "15px" }}>
                                            <div className="ac-item"
                                                style={{ "position": "relative", "width": "100%", "height": "100%" }}><img
                                                    src={review1} alt="reviewer-1"
                                                    className="img-review" /></div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                <div id="colophon">
                    <div className="main-footer">

                    </div>
                    <div className="footer-bellow" style={{ "fontSize": "18px", "fontWeight": "500", "background": "#205E61", "color": "#FBFBFB", marginTop: "-2px" }}>
                        <Container className="footer-below-wrap MuiContainer-root MuiContainer-maxWidthXl css-1ll7j1d" style={{ "paddingTop": "7px", "paddingBottom": "7px", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "columnGap": "10px" }}>
                            <div className="license" style={{ "fontStyle": "italic", "maxWidth": "60%", "fontSize": "13px", "textAlign": "justify" }}>TOEIC is a registered trademark of Educational Testing Service (ETS). This web is not affiliated with or endorsed by Educational Testing Service.</div>
                            <div className="social-main-panel" style={{ "display": "flex", "justifyContent": "flex-end", "alignItems": "center", "padding": "31px 0" }}>
                                <div className="social-label" style={{ "marginRight": "22px" }}>Connect with us</div>
                                <div className="social-link-icons" style={{ "display": "flex", "alignItems": "center" }}>
                                    <a href="https://www.facebook.com/toeictestonline" target="_blank">
                                        <div className="social-item-icon" style={{ "position": "relative", "width": "39px", "height": "39px", "marginLeft": "10px" }}><span style={{ "boxSizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" }}>
                                            <img src={fb} alt="facebook" sizes="100vw" decoding="async" data-nimg="fill" style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "objectFit": "contain" }} /></span></div>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCGG5IGBgkchine0n0OpmFWQ" target="_blank">
                                        <div className="social-item-icon" style={{ "position": "relative", "width": "39px", "height": "39px", "marginLeft": "10px" }}><span style={{ "boxSizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" }}>
                                            <img src={yt} alt="youtube" sizes="100vw" decoding="async" data-nimg="fill" style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "objectFit": "contain" }} /></span></div>
                                    </a>
                                    <a href="https://twitter.com/toeictestpro" target="_blank">
                                        <div className="social-item-icon" style={{ "position": "relative", "width": "39px", "height": "39px", "marginLeft": "10px" }}><span style={{ "boxSizing": "border-box", "display": "block", "overflow": "hidden", "width": "initial", "height": "initial", "background": "none", "opacity": "1", "border": "0px", "margin": "0px", "padding": "0px", "position": "absolute", "inset": "0px" }}>
                                            <img src={tw} alt="twitter" sizes="100vw" decoding="async" data-nimg="fill" style={{ "position": "absolute", "inset": "0px", "boxSizing": "border-box", "padding": "0px", "border": "none", "margin": "auto", "display": "block", "width": "0px", "height": "0px", "minWidth": "100%", "maxWidth": "100%", "minHeight": "100%", "maxHeight": "100%", "objectFit": "contain" }} /></span></div>
                                    </a>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>


            </div >

        );
    }
}