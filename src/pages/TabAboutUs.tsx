import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './TabAboutUs.css';

const TabAboutUs: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About Us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About Us</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>

          <IonCard>
            <IonImg src="/assets/about_us/founders/Skyla.png" alt="Skyla Wagstaff" />
            <IonCardHeader>
              <IonCardTitle>Skyla Wagstaff</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>Lead storyteller by day, sound sleeper by night, Skyla gives orders and setting direction.</IonCardContent>
          </IonCard>

          <IonCard>
            <IonImg src="/assets/about_us/founders/Nova.png" alt="Nova Wagstaff" />
            <IonCardHeader>
              <IonCardTitle>Nova Wagstaff</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>Palaeontologist by day, Nova saves her storytelling for night. The brains behind the operation.</IonCardContent>
          </IonCard>

          <IonCard>
            <IonImg src="/assets/about_us/founders/Mike.png" alt="Mike Wagstaff" />
            <IonCardHeader>
              <IonCardTitle>Mike Wagstaff</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>Code jockey. To be replaced by AI as soon as possible.</IonCardContent>

          </IonCard>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Contact us</IonCardTitle>
            </IonCardHeader>
            <IonCardContent><a href="mailto:mike.wagstaff@gmail.com?subject=Sky No Limit">Drop us an email</a></IonCardContent>
          </IonCard>


        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default TabAboutUs;
