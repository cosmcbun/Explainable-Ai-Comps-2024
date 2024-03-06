import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'LIME',
    Svg: require('@site/static/img/lime.svg').default,
    description: (
      <>
        Written by Ribeiro et al., this method trains a local surrogate model using
        linear regression between the input and black box prediction. Weights are 
        determined by proximity to the original prediction.
      </>
    ),
    link: 'category/LIME',
  },
  {
    title: 'Shapley values',
    Svg: require('@site/static/img/shap-logo.svg').default,
    description: (
      <>
        Shapley values leverage cooperative game theory to quantify each feature's
        contribution to the prediction's deviation from the expected result. 
        <br></br>
        <i>Prediction is but a game, and all feature values are merely players.</i>
      </>
    ),
    link: 'category/Shapley-values',
  },
  {
    title: 'Anchors',
    Svg: require('@site/static/img/anchor.svg').default,
    description: (
      <>
        Written by the same researchers as LIME, this method “anchors” a precise 
        data point locally, by finding a decision rule such that changes in other
        feature values do not affect the prediction.
      </>
    ),
    link: 'category/Anchors',
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} rel="noopener noreferrer"> {/* Add anchor tag with link */}
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
