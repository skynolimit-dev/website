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

          {/* Begin night sky effects - adapted from work copyright (c) 2024 by Tamuna (https://codepen.io/Tamuna/pen/nXEoYO) */}
          <div className="moonlight">
            <div className="moon">
            </div>
          </div>

          <div className="sContainer" id="sFirst">
            <div className="star one">
            </div>
          </div>
          <div className="sContainer" id="sSecond">
            <div className="star two">
            </div>
          </div>
          <div className="sContainer" id="sThird">
            <div className="star three">
            </div>
          </div>
          <div className="sContainer" id="sFourth">
            <div className="star four">
            </div>
          </div>
          <div className="sContainer" id="sFifth">
            <div className="star five">
            </div>
          </div>

          <div className="lsContainer" id="lsFirst">
            <div className="lstar lone">
            </div>
          </div>
          <div className="lsContainer" id="lsSecond">
            <div className="lstar ltwo">
            </div>
          </div>
          <div className="lsContainer" id="lsThird">
            <div className="lstar lthree">
            </div>
          </div>
          <div className="lsContainer" id="lsFourth">
            <div className="lstar lfour">
            </div>
          </div>
          <div className="lsContainer" id="lsFifth">
            <div className="lstar lfive">
            </div>
          </div>
          <div className="lsContainer" id="lsSixth">
            <div className="lstar lsix">
            </div>
          </div>
          <div className="lsContainer" id="lsSeventh">
            <div className="lstar lseven">
            </div>
          </div>
          <div className="lsContainer" id="lsEighth">
            <div className="lstar leight">
            </div>
          </div>
          <div className="lsContainer" id="lsNinth">
            <div className="lstar lnine">
            </div>
          </div>
          <div className="lsContainer" id="lsTenth">
            <div className="lstar lten">
            </div>
          </div>
          <div className="lsContainer" id="lsEleventh">
            <div className="lstar leleven">
            </div>
          </div>
          <div className="lsContainer" id="lsTwelfth">
            <div className="lstar ltwelve">
            </div>
          </div>
          {/* End night sky effects */}

          <h1>Sky No Limit</h1>
          <p className='ion-padding'>Software development for mobile and web</p>
          <p><a href="/our_work">Explore some of the work we've done</a></p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TabHome;
