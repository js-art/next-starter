import Header from '@/ly/Header'
import Head from 'next/head'
import Link from 'next/link'
const About= () => {
    return <>
        <Head><title>About</title></Head>
        <h1>Hi about</h1>
        <Link href="/">
            <a>Home page</a>
        </Link>
    </>
}
// About.getLayout=(page)=>{
//     return <>
//         <Header />
//         {page}
//     </>
// }
export default About