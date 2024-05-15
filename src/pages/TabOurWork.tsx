import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import OurWorkContainer from '../components/our_work/OurWorkContainer';
import './TabOurWork.css';

const TabOurWork: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Our Work</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Our Work</IonTitle>
          </IonToolbar>
        </IonHeader>
        <OurWorkContainer
          category="App"
          name="Top Scores"
          description="A React Native iOS app for UK football fans, featuring upcoming top flight fixtures, live scores, a match predictor and more."
          screenshots={[
            "/assets/our_work/screenshots/top_scores/Fixtures.png",
            "/assets/our_work/screenshots/top_scores/Matches showing on TV.png",
            "/assets/our_work/screenshots/top_scores/Results.png",
            "/assets/our_work/screenshots/top_scores/News.png",
            "/assets/our_work/screenshots/top_scores/Predictor.png",
            "/assets/our_work/screenshots/top_scores/Settings.png"
          ]}
          url="TBC"
        />
      </IonContent>
    </IonPage>
  );
};

export default TabOurWork;
