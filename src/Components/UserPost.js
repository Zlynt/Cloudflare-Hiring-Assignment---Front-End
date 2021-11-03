import React from 'react';

/* Dependencies */
import {
    Row,
    Col,
    Image,
    Card
} from 'react-bootstrap';
//import Moment from 'react-moment';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faClock, faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons'

import YoutubeVideo, { YoutubeTools } from './YoutubeVideo';
import SoundCloudAudio, { SoundCloudAudioTools } from './SoundCloudAudio';

const UserPost = ({ userName, userDescription, timestamp, title, description, type }) => {
    function renderPost() {
        switch (type) {
            case 'image':
                return (<Image src={description}
                    style={{ maxWidth: '100%', maxHeight: '50vw' }}
                    rounded />);
            case 'url':
                return YoutubeTools.validateYouTubeUrl(description) ?
                    (<YoutubeVideo url={description} />) :
                    SoundCloudAudioTools.validateSoundCloudUrl(description) ?
                        (<SoundCloudAudio url={description} />) :
                        (<a href={description}>{description}</a>);
            default: return description;
        }
    }

    function timestampToDate(timestamp = "") {
        let tmpDate = new Date(timestamp);
        return tmpDate.getDate() + '/' + (tmpDate.getMonth() + 1) + '/' + tmpDate.getFullYear();
    }

    return (
        <Row>
            <Col md="10" className="gedf-main">
                <Card className="gedf-card">
                    <Card.Header>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="ml-2">
                                    <div class="h5 m-0">@{userName}</div>
                                    <div class="h7 text-muted">{userDescription}</div>
                                </div>
                            </div>

                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div class="text-muted h7 mb-2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16"><path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" class=""></path>
                            </svg> <spawn>{timestampToDate(timestamp)}</spawn>
                            {/*<FontAwesomeIcon icon={faClock} /><Moment fromNow unix>{timestamp / 1000}</Moment>*/}
                        </div>
                        <a class="card-link" href="#">
                            <h5 class="card-title">{title}</h5>
                        </a>

                        <p class="card-text">{renderPost()}</p>
                    </Card.Body>
                    {/*<Card.Footer className="text-muted">
                        <a href="#" class="card-link"><FontAwesomeIcon icon={faHeart} /> Like</a>
                        <a href="#" class="card-link"><FontAwesomeIcon icon={faComment} /> Comment</a>
                        <a href="#" class="card-link"><FontAwesomeIcon icon={faShare} />  Share</a>
                    </Card.Footer>*/}
                </Card>
            </Col>
        </Row>
    );
}

export default UserPost;