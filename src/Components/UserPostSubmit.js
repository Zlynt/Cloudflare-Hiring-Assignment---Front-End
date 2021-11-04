import React, { useState } from 'react';

/* Dependencies */
import {
    Col,
    Card,
    Tabs,
    Tab,
    Form,
    Button,
    Image
} from 'react-bootstrap/';
import { toast } from 'react-toastify';


import YoutubeVideo from './YoutubeVideo';
import SoundCloudAudio from './SoundCloudAudio';


const UserPostSubmit = () => {
    const [url, setURL] = useState('');
    const [image, setImage] = useState('');


    function handleSubmit(event) {
        event.preventDefault();

        if (event.target[0].value === '') {
            toast.error('Post title cannot be empty', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        if (event.target[1].value === '') {
            toast.error('Post content cannot be empty', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        if (event.target[2].value === '') {
            toast.error('Post was not created due to an error', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        let theRequest = new Request('https://socialnetwork.zlynt.workers.dev/posts', {
            method: 'POST',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default',
            accept: 'application/json',
            contentType: 'application/json',
            body: JSON.stringify({
                "title": event.target[0].value,
                "content": event.target[2].value === 'image' ? image : event.target[1].value,
                "contentType": event.target[2].value,
                "username": "RandomUser"
            })
        });
        fetch(theRequest).then(function (response) {
            return response.text();
        }).then(function (response) {
            try {
                if (response === 'success') {
                    for (let i = 0; i < event.target.length; i++) {
                        if (event.target[i].type !== 'hidden')
                            event.target[i].value = '';
                    }
                    toast.success('Post Created', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    toast.error('Post was not created due to an error', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            } catch (err) {
                toast.error('Post was not created due to an error', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            console.log(response);
        }).catch(function (error) {
            console.log(error);
            toast.error('Post was not created due to an error', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });
    }

    return (
        <Col md="10" className="gedf-main">
            <Card className="gedf-card">
                <Card.Body>

                    <Tabs defaultActiveKey="publishText" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="publishText" title="Make a publication">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Post Title" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>What are you thinking?</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.postType">
                                    <Form.Control type="hidden" value="text" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Post
                                </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="publishImage" title="Image">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Post Title" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Please select an image</Form.Label>
                                    <Form.Control type="file" placeholder="Image"
                                        accept="image/png, image/gif, image/jpeg"
                                        onChange={(event) => {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                const base64String = reader.result;
                                                setImage(base64String);
                                            };
                                            reader.readAsDataURL(event.target.files[0]);
                                        }} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.imagePreview">
                                    {image !== '' &&
                                        <Image src={image}
                                            style={{ maxWidth: '100%', maxHeight: '50vw' }}
                                            rounded />
                                    }
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.postType">
                                    <Form.Control type="hidden" value="image" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Post
                                </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="publishLink" title="Link">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Post Title" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>What are you thinking?</Form.Label>
                                    <Form.Control type="text" placeholder="Link"
                                        value={url}
                                        onChange={(event) => {
                                            setURL(event.target.value);
                                        }} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.postType">
                                    <Form.Control type="hidden" value="url" />
                                </Form.Group>
                                <YoutubeVideo url={url} />
                                <SoundCloudAudio url={url} />
                                <Button variant="primary" type="submit">
                                    Post
                                </Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default UserPostSubmit;