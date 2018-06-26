// import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const About = (props) => (
  <Layout>
    <div>
      <h1>About</h1>
      <p dangerouslySetInnerHTML={{ __html: props.htmlData }}></p>
    </div>
  </Layout>
)

About.getInitialProps = async function({req}) {
  const baseUrl = req ? `http://${req.headers.host}` : '';
  const res = await fetch(baseUrl + '/static/sdt01_00.htm');
  const data = await res.text();

  return {
    htmlData: data
  }
}

export default About