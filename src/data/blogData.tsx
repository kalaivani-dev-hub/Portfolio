export interface IBlogData {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  url: string;
}

// Reversing this to see the latest one on TOP
export const blogData: IBlogData[] = [
  {
    id: 1,
    title: "My coding journey from 100 days of coding challenge",
    description:
      "This chronicles my transformative '100 Days of Coding' journey, showcasing my growth and experiences as a developer. It serves as a motivating resource for others and reflects my dedication to continuous improvement in the field",
    date: "Mar 25, 2022",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--F9Lh-Q5w--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qsks9yw6l2bo305q8e7p.jpeg",
    url: "https://dev.to/annshiv/my-100-days-of-coding-journey-3ege",
  },
  {
    id: 2,
    title: "My learnings from my one-year software developer experience",
    description:
      "This blog shares my personal insights and lessons from my one-year journey as a software developer, offering practical advice and reflections for others in the field.",
    date: "Aug 14, 2022",
    image: "https://miro.medium.com/v2/resize:fit:720/0*wdLYmsaKEFBsbB8x",
    url: "https://medium.com/@annamalaipalani11/lessons-ive-learned-from-my-one-year-software-developer-experience-ac0eabf024ae",
  },
  {
    id: 3,
    title: "My journey as a self-taught developer",
    description:
      "This blog showcases my journey as a self-taught developer, sharing vital insights and experiences. It's a valuable addition to my portfolio, offering motivation to fellow self-learners in the development field.",
    date: "Sep 4, 2022",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*4nYsWqoKVm5Iz9Q4",
    url: "https://medium.com/@annamalaipalani11/my-journey-as-a-self-taught-developer-938429f77b00",
  },
  {
    id: 4,
    title: "How I learned to code",
    description:
      "This article narrates my journey of learning how to code, highlighting the challenges I overcame and the lessons I gained. It serves as an inspirational resource for aspiring developers, showcasing my commitment to mastering coding skills.",
    date: "Apr 1, 2023",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*szqc9-NzOKgw1kht",
    url: "https://medium.com/@annamalaipalani11/how-i-learned-to-code-edb6a274184c",
  },
  {
    id: 5,
    title:
      "TypeScript Narrowing: Powerful Techniques for Precise Type Checking",
    description:
      "Exploring TypeScript's narrowing techniques, this content empowers developers with precise type checking skills. A valuable resource for those advancing in TypeScript, it showcases expertise in refining type systems.",
    date: "Apr 9, 2023",
    image: "https://miro.medium.com/v2/resize:fit:1400/0*G1Ier7MADpOiOCUJ",
    url: "https://medium.com/@annamalaipalani11/typescript-narrowing-powerful-techniques-for-precise-type-checking-85234e593096",
  },
  {
    id: 6,
    title:
      "Reflecting on 2023: A Year of Missed Opportunities",
    description:
      "Embark on a thought-provoking journey through the highs and lows of 2023 in my latest blog post. Reflecting on a year filled with missed opportunities, I share personal insights, challenges, and the invaluable lessons learned.",
    date: "Dec 10, 2023",
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*OWANl72PxhQzteMs",
    url: "https://medium.com/@annamalaipalani11/reflecting-on-2023-a-year-of-missed-opportunities-40773feef241",
  },
].reverse();

// Do not remove any fields.
// Leave it blank instead as shown below.

/* 
{
    id: 1,
    title: 'Car Pooling System',
    description: '',
    date: 'Oct 1, 2020',
    image: '',
    url: 'https://preview.colorlib.com/theme/rezume/'
}, 
*/
