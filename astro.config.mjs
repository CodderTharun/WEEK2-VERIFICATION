import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import starlightThemeRapide from 'starlight-theme-rapide'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
   site: 'https://p-cs-verification-7lkg.vercel.app', 
  integrations: [
    starlight({
      expressiveCode: {
  themes: ['github-dark', 'github-light'],
},
       plugins: [starlightThemeRapide()],
       customCss: ['./src/styles/global.css'],
      title: "Let's Get Placed - 2027",
      description: "Structured preparation for placements",
      head: [
  {
    tag: 'link',
    attrs: { rel: 'icon', href: '/favicon.png' },
  },
  {
    tag: 'link',
    attrs: { rel: 'shortcut icon', href: '/favicon.png' },
  },
],

      sidebar: [
        {
          label: "Introduction",
          collapsed: false,
          items: [{ label: "Overview", link: "/" }],
        },

        {
          label: "Aptitude",
          collapsed: true,
          items: [
            {
              label: "Overview",
              collapsed: true,
              items: [
                { label: "Syllabus", link: "/aptitude/" },
              ]
            },
            {
              label: "Week 1",
              collapsed: true,
              items: [
                { label: "Quantitative Ability", link: "/aptitude/week-1/quantitative-ability" },
              ],
            },
            {
               label: "Week 2",
              collapsed: true,
              items: [
                { label: "Quantitative Ability", link: "/aptitude/week-2/quantitative-ability" },
              ],
            },
            // {
            //   label: "Week 3",
            //   collapsed: true,
            //   items: [
            //     { label: "Overview", link: "/aptitude/week-3/" },
            //     { label: "Quantitative Ability", link: "/aptitude/week-3/quantitative-ability" },
            //     { label: "Logical Reasoning", link: "/aptitude/week-3/logical-reasoning" },
            //     { label: "Verbal Reasoning", link: "/aptitude/week-3/verbal-reasoning" },
            //     { label: "Data Interpretation", link: "/aptitude/week-3/data-interpretation" },
            //     { label: "Problem Solving", link: "/aptitude/week-3/problem-solving" },
            //   ],
            // },
            // {
            //   label: "Week 4",
            //   collapsed: true,
            //   items: [
            //     { label: "Overview", link: "/aptitude/week-4/" },
            //     { label: "Quantitative Ability", link: "/aptitude/week-4/quantitative-ability" },
            //     { label: "Logical Reasoning", link: "/aptitude/week-4/logical-reasoning" },
            //     { label: "Verbal Reasoning", link: "/aptitude/week-4/verbal-reasoning" },
            //     { label: "Data Interpretation", link: "/aptitude/week-4/data-interpretation" },
            //     { label: "Problem Solving", link: "/aptitude/week-4/problem-solving" },
            //   ],
            // },
            // {
            //   label: "Week 5",
            //   collapsed: true,
            //   items: [
            //     { label: "Overview", link: "/aptitude/week-5/" },
            //     { label: "Quantitative Ability", link: "/aptitude/week-5/quantitative-ability" },
            //     { label: "Logical Reasoning", link: "/aptitude/week-5/logical-reasoning" },
            //     { label: "Verbal Reasoning", link: "/aptitude/week-5/verbal-reasoning" },
            //     { label: "Data Interpretation", link: "/aptitude/week-5/data-interpretation" },
            //     { label: "Problem Solving", link: "/aptitude/week-5/problem-solving" },
            //   ],
            // },
          ],
        },

        {
          label: "ECE",
collapsed: true,
items: [
  {
    label: "Overview",
    collapsed: true,
    items: [
      { label: "Syllabus", link: "/ece/" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
    ],
  },
  {
    label: "C Programming",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/ece/week-1/cprogramming" },
      { label: "Week 2", link: "/ece/week-2/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
    ],
  },

  {
    label: "Digital Electronics",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/ece/week-1/digital-logic" },
      //{ label: "Week 2", link: "/ece/week-1/digital-logic" },
      //{ label: "Week 3", link: "/ece/week-1/digital-logic" },
      //{ label: "Week 4", link: "/ece/week-1/digital-logic" },
      //{ label: "Week 5", link: "/ece/week-1/digital-logic" },
    ],
  },

  {
    label: "Network Analysis",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 2", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 3", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 4", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 5", link: "/ece/week-1/networkanalysis" },
    ],
  },
  {
    label: "Computer Networks",
    collapsed: true,
    items: [
      { label: "Week 2", link: "/ece/week-2/computer-networks" },
      
    ],
  },
  {
    label: "Analog Electronics",
    collapsed: true,
    items: [
      { label: "Week 2", link: "/ece/week-2/analog-eletronics" },
      
    ],
  },
   {
    label: "ADC",
    collapsed: true,
    items: [
      { label: "Week 2", link: "/ece/week-2/adc" },
      
    ],
  },
  {
    label: "Verilog",
    collapsed: true,
    items: [
      { label: "Week 2", link: "/ece/week-2/verilog" },
      
    ],
  },
],
        },

        {
          label: "EEE",
          collapsed: true,
          items: [
{
    label: "Overview",
    collapsed: true,
    items: [
      { label: "Syllabus", link: "/eee/" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
    ],
  },

            {
    label: "C Programming",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/ece/week-1/cprogramming" },
      { label: "Week 2", link: "/eee/week-2/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
    ],
  },

  {
    label: "Digital Electronics",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/ece/week-1/digital-logic" },
      //{ label: "Week 2", link: "/ece/week-1/digital-logic" },
      //{ label: "Week 3", link: "/ece/week-1/digital-logic" },
      //{ label: "Week 4", link: "/ece/week-1/digital-logic" },
      //{ label: "Week 5", link: "/ece/week-1/digital-logic" },
    ],
  },

  {
    label: "Network Analysis",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 2", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 3", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 4", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 5", link: "/ece/week-1/networkanalysis" },
    ],
  },
  {
    label: "Analog Electronics",
    collapsed: true,
    items: [
      { label: "Week 2", link: "/eee/week-2/analog-electronics" },
      //{ label: "Week 2", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 3", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 4", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 5", link: "/ece/week-1/networkanalysis" },
    ],
  },
   {
    label: "Power Electronics",
    collapsed: true,
    items: [
      { label: "Week 2", link: "/eee/week-2/power-electronics" },
      //{ label: "Week 2", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 3", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 4", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 5", link: "/ece/week-1/networkanalysis" },
    ],
  },
  {
    label: "Electrical Machines",
    collapsed: true,
    items: [
      { label: "Week 2", link: "/eee/week-2/electrical-machines" },
      //{ label: "Week 2", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 3", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 4", link: "/ece/week-1/networkanalysis" },
      //{ label: "Week 5", link: "/ece/week-1/networkanalysis" },
    ],
  },
 // {
  //  label: "Power Electronics ",
   // collapsed: true,
   // items: [
     // { label: "Week 1", link: "/eee/week-1/power-generation" },
      //{ label: "Week 2", link: "/eee/week-1/power-generation" },
      //{ label: "Week 3", link: "/eee/week-1/power-generation" },
      //{ label: "Week 4", link: "/eee/week-1/power-generation" },
      //{ label: "Week 5", link: "/eee/week-1/power-generation" },
   // ],
 // },
          ],
        },

        {
          label: "IT",
          collapsed: true,
          items: [
             {
    label: "Overview",
    collapsed: true,
    items: [
      { label: "Syllabus", link: "/it/" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
    ],
  },
            {
    label: "AIML ",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/it/week-1/aiml" },
      { label: "Week 2", link: "/it/week-2/aiml" },
      //{ label: "Week 3", link: "/it/week-1/aiml" },
      //{ label: "Week 4", link: "/it/week-1/aiml" },
      //{ label: "Week 5", link: "/it/week-1/aiml" },
    ],
  },
   {
    label: "CN",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/it/week-1/cn" },
      { label: "Week 2", link: "/it/week-2/cn" },
      //{ label: "Week 3", link: "/it/week-1/cn" },
      //{ label: "Week 4", link: "/it/week-1/cn" },
      //{ label: "Week 5", link: "/it/week-1/cn" },
    ],
  },
     {
    label: "DBMS",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/it/week-1/dbms" },
      { label: "Week 2", link: "/it/week-2/dbms" },
      //{ label: "Week 3", link: "/it/week-1/dbms" },
      //{ label: "Week 4", link: "/it/week-1/dbms" },
      //{ label: "Week 5", link: "/it/week-1/dbms" },
    ],
  },  
   {
    label: "DSA",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/it/week-1/dsa" },
      { label: "Week 2", link: "/it/week-2/dsa" },
      //{ label: "Week 3", link: "/it/week-1/dbms" },
      //{ label: "Week 4", link: "/it/week-1/dbms" },
      //{ label: "Week 5", link: "/it/week-1/dbms" },
    ],
  },  
   {
    label: "Git and Github",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/it/week-1/git" },
      //{ label: "Week 2", link: "/it/week-1/git" },
      //{ label: "Week 3", link: "/it/week-1/git" },
      //{ label: "Week 4", link: "/it/week-1/git" },
      //{ label: "Week 5", link: "/it/week-1/git" },
    ],
  },  
  {
    label: "OOP",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/it/week-1/oop" },
      { label: "Week 2", link: "/it/week-2/oops" },
      //{ label: "Week 1", link: "/it/week-1/oops" },
      //{ label: "Week 1", link: "/it/week-1/oops" },
      //{ label: "Week 1", link: "/it/week-1/oops" },
    ],
  },  
    {
    label: "OS",
    collapsed: true,
    items: [
      { label: "Week 1", link: "/it/week-1/os" },
      { label: "Week 2", link: "/it/week-2/os" },
      //{ label: "Week 1", link: "/it/week-1/os" },
      //{ label: "Week 1", link: "/it/week-1/os" },
      //{ label: "Week 1", link: "/it/week-1/os" },
    ],
  }, 
  {
    label: "SDLC",
    collapsed: true,
    items: [
      { label: "Week 2", link: "/it/week-2/sdlc" },
      //{ label: "Week 3", link: "/it/week-1/sdlc" },
      //{ label: "Week 4", link: "/it/week-1/sdlc" },
      //{ label: "Week ", link: "/it/week-1/sdlc" },
    ],
  },
 
          ],
        },

        {
          label: "Mechanical",
          collapsed: true,
          items: [
            {
    label: "Overview",
    collapsed: true,
    items: [
      { label: "Syllabus", link: "/mech/" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
      //{ label: "Week 1", link: "/ece/week-1/cprogramming" },
    ],
  },
            {
              label: "Basic Thermodynamics",
              collapsed: true,
              items: [
                { label: "Week 1", link: "/mech/week-1/thermodynamics" },
                { label: "Week 2", link: "/mech/week-2/thermodynamics" },
                //{ label: "Week 1", link: "/mech/week-1/thermodynamics" },
                //{ label: "Week 1", link: "/mech/week-1/thermodynamics" },
                //{ label: "Week 1", link: "/mech/week-1/thermodynamics" },
              ],
            },

            {
              label: "Strength of Materials",
              collapsed: true,
              items: [
                { label: "Week 1", link: "/mech/week-1/strength-materials" },
                { label: "Week 2", link: "/mech/week-2/strength-materials" },
                //{ label: "Strength of Materials", link: "/mech/week-1/strength-materials" },
                //{ label: "Strength of Materials", link: "/mech/week-1/strength-materials" },
                //{ label: "Strength of Materials", link: "/mech/week-1/strength-materials" },
              ],
            },
           
          ],
        },

       {
        label: "Answer Keys",
       collapsed: true,
       items: [
       {
        label: "IT",
        items: [
       { label: "Week 1", link: "/answer-keys/it/week-1" },
                //{ label: "Week 2", link: "/answer-keys/it/week-2" },
                //{ label: "Week 3", link: "/answer-keys/it/week-3" },
                //{ label: "Week 4", link: "/answer-keys/it/week-4" },
                //{ label: "Week 5", link: "/answer-keys/it/week-5" },
            ],
           },
         {
         label: "ECE",
        items: [
        { label: "Week 1", link: "/answer-keys/ece/week-1" },
                //{ label: "Week 2", link: "/answer-keys/ece/week-2" },
                //{ label: "Week 3", link: "/answer-keys/ece/week-3" },
                //{ label: "Week 4", link: "/answer-keys/ece/week-4" },
                //{ label: "Week 5", link: "/answer-keys/ece/week-5" },
            ],
          },
           {
              label: "EEE",
             items: [
          { label: "Week 1", link: "/answer-keys/eee/week-1" },
                //{ label: "Week 2", link: "/answer-keys/eee/week-2" },
                //{ label: "Week 3", link: "/answer-keys/eee/week-3" },
                //{ label: "Week 4", link: "/answer-keys/eee/week-4" },
                //{ label: "Week 5", link: "/answer-keys/eee/week-5" },
             ],
            },
            {
             label: "Mechanical",
            items: [
          { label: "Week 1", link: "/answer-keys/mech/week-1" },
                //{ label: "Week 2", link: "/answer-keys/mech/week-2" },
                //{ label: "Week 3", link: "/answer-keys/mech/week-3" },
                //{ label: "Week 4", link: "/answer-keys/mech/week-4" },
                //{ label: "Week 5", link: "/answer-keys/mech/week-5" },
             ],
           },
           
          ],
        },
        
      ],
    }),

    // MDX support (optional but good to keep)
    mdx(
        {
			remarkPlugins: [remarkMath],
			rehypePlugins: [rehypeKatex],
		}
    ),
  ],
});