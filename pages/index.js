import Layout from '../components/Layout'

const Index = ({title, content}) => (
  <Layout>
    <div>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  </Layout>
)

Index.getInitialProps = async function({query}) {
  
  const titleRegex = /<title>([\s\S]*?)<\/title>/gmi
  const contentRegex = /<Content>([\s\S]*?)<\/Content>/gmi

  return {
    title: titleRegex
      .exec(query.data)[0]
      .replace(/<\/?title>/gmi, '')
      .replace(/(\r\n|\r|\n)/gmi, ''),
    content: contentRegex
      .exec(query.data)[0]
      .replace(/<\/?Content>/, '')
      .replace(/(\r\n|\r|\n)/gmi, '<br />')
  }
}

export default Index;