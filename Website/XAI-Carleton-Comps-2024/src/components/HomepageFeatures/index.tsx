import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'LIME',
    Svg: require('@site/static/img/lime.png').default,
    description: (
      <>
        Written by Ribeiro et al, this method trains a local surrogate model using
        linear regression between the input and black box prediction. Weights are 
        determined by proximity to the original prediction.
      </>
    ),
  },
  {
    title: 'Shapley values',
    Svg: require('@site/static/img/shap-logo.png').default,
    description: (
      <>
        Mathematical approach written by Lloyd Shapley. It uses cooperative game 
        theory, treating features as “players” that each contribute a “Shapley value”
        to the avg. prediction.
      </>
    ),
  },
  {
    title: 'Anchors',
    Svg: require('@site/static/img/anchor.png').default,
    description: (
      <>
        Written by the same researchers as LIME, this method “anchors” a precise 
        data point locally, by finding a decision rule such that changes in other
        feature values do not affect the prediction.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
