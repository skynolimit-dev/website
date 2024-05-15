import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './TabHome.css';

const TabHome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sky No Limit</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <h1>Sky No Limit</h1>
          <p className='ion-padding'>Software development for mobile and web</p>
          <p><a href="/our_work">Explore some of the work we've done</a></p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TabHome;
