import { IonContent } from '@ionic/react';

import OurWorkScreenshots from './OurWorkScreenshots';
import './OurWorkContainer.css';

interface ContainerProps {
  category: string;
  name: string;
  description: string;
  screenshots: string[];
  url: string;
}

const OurWorkContainer: React.FC<ContainerProps> = ({ category, name, description, screenshots }) => {
  return (
    <IonContent className="ion-padding ion-text-center">
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        <OurWorkScreenshots screenshots={screenshots} />
      </div>
    </IonContent>
  );
};

export default OurWorkContainer;
