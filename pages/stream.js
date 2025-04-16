import Layout from "../components/Layout";
import styles from '../styles/stream.module.css'
require('dotenv').config()

export default function Vappu() {
    const streamUrl = process.env.STREAM_URL

    return (
      <Layout>
        <div className={styles.main}>
            <iframe
                className={styles.stream}
                src={`${streamUrl}/embed/video`}
                title="Owncast"
                height="350px" width="550px"
                referrerpolicy="origin"
                allowfullscreen>
            </iframe>
            <iframe
                className={styles.chat}
                src={`${streamUrl}/embed/chat/readwrite`}
                title="Owncast"
                height="350px" width="550px"
                referrerpolicy="origin">
            </iframe>
        </div>
      </Layout>
    );
}