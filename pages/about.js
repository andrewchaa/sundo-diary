import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

const About = (props) => (
  <Layout>
    <div>
      <h2>{props.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
    </div>
  </Layout>
)

About.getInitialProps = async function({req}) {
  const baseUrl = req ? `http://${req.headers.host}` : '';
  const res = await fetch(baseUrl + '/static/sdt01_00.htm');
  const data = await res.text();
  const titleRegex = /<title>([\s\S]*?)<\/title>/gmi
  const contentRegex = /<Content>([\s\S]*?)<\/Content>/gmi

  return {
    title: titleRegex
      .exec(data)[0]
      .replace(/<\/?title>/gmi, '')
      .replace(/(\r\n|\r|\n)/gmi, ''),
    content: contentRegex
      .exec(data)[0]
      .replace(/<\/?Content>/, '')
      .replace(/(\r\n|\r|\n)/gmi, '<br />')
  }
}

export default About