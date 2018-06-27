import fetch from 'isomorphic-unfetch';
import R from 'ramda';
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
  const html = await res.text();

  return {
    htmlData: html.replace(/(\r\n|\r|\n)/gi, '<br />')
  }
}

export default About