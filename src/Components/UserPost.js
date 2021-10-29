import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment';

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
                            <FontAwesomeIcon icon={faClock} /> <Moment fromNow unix>{timestamp / 1000}</Moment>
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