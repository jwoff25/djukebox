import React, { Component } from "react";
import { Link } from "react-router-dom";
import spotify_logo from "../images/Spotify_Logo_RGB_Black.png";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className='jumbotron text-center'>
          <h1 className='card-title h1'>Welcome to DJukebox!</h1>

          <hr className='my-4 pb-2' />

          <div className='row d-flex justify-content-center'>
            <div className='col-xl-7 pb-2'>
              <p className='card-text text-justify'>
                DJukebox is a digital jukebox for your friends and family.{" "}
                <strong>
                  Have one person create a session, connect their Spotify
                  account and start playing music; then everyone else can join
                  their session and start adding songs to their queue, like a
                  jukebox!
                </strong>{" "}
                In charge of music for the long drive but don't know what to
                play? Start a session and have everyone in the car contribute to
                the music selection.
              </p>
            </div>
          </div>

          <p className='text-info my-4 font-weight-bold'>
            If you're creating a session, click "Create Session". If you're
            joining a session, click "Join Session".
          </p>
          <Link to='/admin'>
            <button
              type='button'
              className='btn btn-outline-primary waves-effect mr-2'
            >
              Create Session
            </button>
          </Link>
          <Link to='/guest'>
            <button
              type='button'
              className='btn btn-outline-secondary waves-effect ml-2'
            >
              Join Session
            </button>
          </Link>
        </div>
        <div className='container text-center'>
          <h2 className='card-title h2'>Getting Started</h2>
          <p className='text-info my-4 font-weight-bold'>
            First time? Here's how you can get started.
          </p>
          <hr className='my-4 pb-2' />
          <div className='card-deck mb-3 text-center'>
            <div className='card mb-4 box-shadow'>
              <div className='card-header'>
                <h4 className='my-0 font-weight-normal'>Creating a Session</h4>
              </div>
              <div className='card-body'>
                <h4 className='card-title pricing-card-title'>
                  <small className='text-muted'>
                    To be the session owner, you need to be the one playing
                    music with a premium Spotify account.
                  </small>
                </h4>
                <ol className='text-left mt-3 mb-4'>
                  <li>
                    Click on "Create Session" above or below to access the
                    Session creation page.
                  </li>
                  <li>
                    Copy the Session ID to share for later, then click "Create
                    Session".
                  </li>
                  <li>
                    Login to your Spotify account{" "}
                    <span className='text-danger'>
                      (make sure you have a Spotify premium account!)
                    </span>
                  </li>
                  <li>
                    Share the Session ID with whoever wants to join, and start
                    playing music!
                  </li>
                </ol>
                <Link to='/admin'>
                  <button
                    type='button'
                    className='btn btn-lg btn-block btn-primary'
                  >
                    Start your own session!
                  </button>
                </Link>
              </div>
            </div>
            <div className='card mb-4 box-shadow'>
              <div className='card-header'>
                <h4 className='my-0 font-weight-normal'>Joining a Session</h4>
              </div>
              <div className='card-body'>
                <h4 className='card-title pricing-card-title'>
                  <small className='text-muted'>
                    Anyone can join a session as long as they have the Session
                    ID. No Spotify account required.
                  </small>
                </h4>
                <ol className='text-left mt-3 mb-4'>
                  <li>Get the session owner's Session ID.</li>
                  <li>
                    Click on "Join Session" to be redirected to the Join a
                    Session page, and enter the session ID.
                  </li>
                  <li>
                    Click on "Join Session" to join the session. You will NOT
                    need to log in to your Spotify account to join.
                  </li>
                  <li>
                    Start adding your songs to the session owner's queue and
                    enjoy sharing your favorite music!
                  </li>
                </ol>
                <Link to='/guest'>
                  <button
                    type='button'
                    className='btn btn-lg btn-block btn-primary'
                  >
                    Join a session!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-light pt-4 mb-3'>
          <div className='container text-center blue-grey lighten-5'>
            <h2 className='card-title h2'>When to Use DJukebox</h2>
            <p className='text-info my-4 font-weight-bold'>
              Here are some ideas on when to use this app.
            </p>

            <hr className='my-4 pb-2' />

            <div className='container marketing'>
              <div className='row'>
                <div className='col-lg-4'>
                  <p>
                    <i className='fas fa-car fa-7x'></i>
                  </p>
                  <h4>On Drives</h4>
                  <p className='text-justify'>
                    Stuck riding shotgun and hate being the only one in charge
                    of the music? No fear; just launch a session, have your
                    ride-mates join the session, and get them in on the music
                    selection process.
                  </p>
                </div>
                <div className='col-lg-4'>
                  <p>
                    <i className='fas fa-home fa-7x'></i>
                  </p>
                  <h4>At Home</h4>
                  <p className='text-justify'>
                    Hanging out with friends or family can always use some
                    background music. Why not have everyone there join in on
                    choosing the tunes to accompany the bustling conversations
                    and copius amounts of alcohol (or soft drinks) you'll be
                    enjoying.
                  </p>
                </div>
                <div className='col-lg-4'>
                  <p>
                    <i className='fas fa-glass-cheers fa-7x'></i>
                  </p>
                  <h4>At Parties</h4>
                  <p className='text-justify'>
                    Music is the lifeblood of a party. Freshen it up by letting
                    your patrons decide what to groove to. EDM? Check. A little
                    slow dance to get romatic? Definitely. It's easy as creating
                    a session, logging into Spotify, and sharing the code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container bg-white text-center pt-4 mb-5'>
          <h2 className='card-title h2'>How It Works</h2>
          <p className='text-info my-4 font-weight-bold'>
            A quick look at what's going on behind the scenes.
          </p>
          <hr className='my-4 pb-2' />
          <p className='text-justify lead'>
            This website uses the Spotify API to search for songs and add them
            to the owner's queue. This means that we don't have access to your
            password at any point as your sign in data goes straight to Spotify.
            All we get is your unique API key that allows us to perform the
            aformentioned actions.
          </p>
          <img
            src={spotify_logo}
            className='img-fluid p-3 w-50'
            alt='Spotify Logo'
          />
          <p className='text-left blockquote'>We ask for permission to:</p>
          <div className='list-group text-left'>
            <div className='list-group-item list-group-item-action flex-column align-items-start'>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>View your Spotify account data</h5>
              </div>
              <small>
                Your name and username, your profile picture, how many followers
                you have on Spotify and your public playlists
              </small>
              <p className='mb-1'>
                This is requested by default. However we do not need this info
                and thus will not do anything with your Spotify account data.
                This info will never reach our database.
              </p>
            </div>
            <div className='list-group-item list-group-item-action flex-column align-items-start'>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>Take actions in Spotify on your behalf</h5>
              </div>
              <small>Control Spotify on your devices</small>
              <p className='mb-1'>
                This is permission is required to add songs to your queue, and
                is used only to do so. No other actions can be taken by this
                website in Spotify on your behalf.
              </p>
            </div>
          </div>
          <p className='text-left blockquote-footer'>
            You can remove these permissions anytime through your{" "}
            <a href='https://www.spotify.com/account/apps/'>
              Spotify Account Settings
            </a>
            .
          </p>
        </div>
      </div>
    );
  }
}
