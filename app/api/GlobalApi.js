import { gql, request } from "graphql-request";

const apiMater =
  "https://ap-south-1.cdn.hygraph.com/content/cm6kn2b3r01er07ut3a3cwgh0/master";

const projectdatas = async (projectslug) => {
  const query = gql`
    query MyQuery {
      projectdatas(
        where: { slug: "${projectslug}" }
        orderBy: createdAt_DESC
      ) {
        title
        image {
          url
        }
        description
        createdAt
        link
        slug
      }
    }
  `;

  const data = await request(apiMater, query);
  return data;
};




const certifcites = async (projectslug) => {
  const query = gql`
   query MyQuery {
  certificates(first: 100) {
    details
    dayOfit
    imageOfCertifict {
      url
    }
    place
  }
}

    `

  const data = await request(apiMater, query)
  return data

}

const mainpageProjects = async () => {
  const query = gql`
   query MyQuery {
  projectdatas {
    title

    image {
      url
    }
      slug
  }
}

    `

  const data = await request(apiMater, query)
  return data

}

const sendMessage = async (name, email, phone3, message) => {
  const query = gql`
 
  
  mutation MyMutation {
  createNewMessage(
    data: {email: "`+ email + `", message: "` + message + `", name: "` + name + `", phone: "` + phone3 + `"}
  ) {
    id
  }
  publishManyNewMessagesConnection(first: 1000) {
    edges {
      node {
        id
      }
    }
  }
}
  

    `

  const data = await request(apiMater, query)
  return data
}

const messages = async () => {
  const query = gql`
   
  query MyQuery {
  newMessages(first: 1000) {
    message
    name
    email
    phone
  }
}

    `

  const data = await request(apiMater, query)
  return data

}

export default { projectdatas, mainpageProjects, sendMessage, messages, certifcites }