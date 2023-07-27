import { useRouter } from 'next/router';

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           name: 'next.js',
//         },
//       }, // See the "paths" section below
//     ],
//     // fallback: 'blocking', // false or "blocking"
//     fallback: true, // false or "blocking"
//   };
// }

// export async function getStaticProps() {
//   console.log('get static props');
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const repo = await res.json();
//   console.time('Time this');
//   for (let i = 0; i < 2000000000; i++) {
//     let s = Math.sin(i);
//   }
//   console.timeEnd('Time this');
//   return { props: { repo } };
// }

export async function getServerSideProps(context) {
  console.log(context, null, Infinity, 'ttt');
  // console.log(context);
  // console.log(JSON.stringify(context, null, 2));
  return {
    props: { repo: { stargazers_count: 42 } },
  };
}

export default function Page({ repo }) {
  const router = useRouter();

  // return repo ? repo.stargazers_count : 'waiting for data';
  // return 'waiting for data';
  if (router.isFallback) {
    return 'Loading...';
  }

  return repo.stargazers_count;
}
