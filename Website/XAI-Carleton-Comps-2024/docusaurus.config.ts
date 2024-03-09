import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Explainable AI: Breaking Down the Black Box',
  tagline: 'Adrian Boskovic, Sam Johnson-Lacoss, Chris Melville, Josh Moore, Thomas Pree, Lev Shuster, and Prof. Anna Rafferty',
  favicon: 'img/carleton-enhanced.ico',
  onBrokenAnchors: 'ignore',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  
  

  // Set the production url of your site here
  url: 'https://cosmcbun.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Explainable-Ai-Comps-2024/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'cosmcbun.github.io',
  organizationName: 'cosmcbun',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cosmcbun/Explainable-Ai-Comps-2024/tree/main/Website/XAI-Carleton-Comps-2024',
        },
        blog:false
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    navbar: {
      title: 'Explainable AI: Breaking Down the Black Box',
      logo: {
        alt: 'Carleton College Logo',
        src: 'img/carleton logo enhanced.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'About Us',
          to: '/About Us',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Writeup',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/cosmcbun/Explainable-Ai-Comps-2024/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://cs.carleton.edu/cs_comps/2324/explainable-ai/index.php',
          label: 'Project Description',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Our Project',
          items: [
            {
              label: 'Introduction',
              to: '/category/Introduction',
            },
            {
              label: 'Methodology',
              to: '/category/Methodology',
            },
            {
              label: 'User Study',
              to: '/category/user-study--results',
            },
            {
              label: "Citations",
              to: 'Citations'
            }
          ],
        },
        {
          title: 'XAI Techniques',
          items: [
            {
              label: 'LIME',
              to: '/category/LIME',
            },
            {
              label: 'Shapley values',
              to: '/category/Shapley-values',
            },
            {
              label: 'Anchors',
              to: '/category/Anchors',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Project Description',
              href: 'https://cs.carleton.edu/cs_comps/2324/explainable-ai/index.php',
            },
            {
              label: 'GitHub Repository',
              href: 'https://github.com/cosmcbun/Explainable-Ai-Comps-2024/',
            },
            {
              label: 'About Us',
              to: '/About Us',
            }
          ],
        },
      ],
      copyright: `Copyright © 2024 Carleton College XAI Group | Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
