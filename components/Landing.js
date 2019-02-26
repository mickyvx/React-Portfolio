import Head from 'next/head'
import Header from './Header'
import SocialLinks from './SocialLinks'
import '../css/bootstrap.min.css'

const Landing = (props) => (
  <div className="container">
    <Head>
      <title>{props.title}</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Roboto" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
    </Head>

    <div className="row justify-content-center">
      <div className="col-md-6">
        <Header />
        {props.children}
        <SocialLinks />
      </div>
    </div>


    <style jsx global>
      {`
        body {
          font-family: 'Roboto', sans-serif;
          margin-top: 80px;
        }
        
        h1 {
          font-family: 'Montserrat', sans-serif !important;
          font-weight: 400;
          font-style: normal;
        }

        p {
          font-size: 14px;
          line-height: 24px;
        }
      `}
    </style>
  </div>
)

export default Landing