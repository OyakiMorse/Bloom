import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css'
import { Button, Form, FormControl} from 'react-bootstrap';

function Welcome() {
    return(
        <div>
             <div className='welcome'>
                
                <img src = 'https://www.wallpaperflare.com/static/386/807/796/anime-sky-clouds-railway-wallpaper.jpg' alt = '*'></img>
                <h1>SOCIAL NETWORK FOR CREATORS</h1>
            </div>

        <div className='search'>
            <Form  className='searchPanel'>
                <FormControl 
            type='text'
                placeholder='Search'
                className='mr-sm-2'
                id='searching'
                />
            </Form>
            <Button variant='outline-success' className = 'btnSearch'><img src='https://img.icons8.com/pastel-glyph/2x/search--v2.png' alt='*'></img></Button>
        </div>
    </div>
    );
}

export default Welcome;