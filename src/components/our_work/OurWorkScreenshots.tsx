import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle } from '@ionic/react';


import './OurWorkScreenshots.css';

interface ContainerProps {
    screenshots: string[];
}

// Extracts and returns the file name from the given screenshot path for use as alt text
// Strip off the file extension (normally '.png') and any preceding path
function getScreenshotText(screenshotPath: string) {
    return screenshotPath.split('/').pop()?.split('.')[0];
}


function renderScreenshot(screenshotPath: string, screenshotIndex: number) {
    return (
        <IonCard className='ion-margin'>
            <IonCardHeader>
                <IonCardSubtitle>{getScreenshotText(screenshotPath)}</IonCardSubtitle>
            </IonCardHeader>
            <img src={screenshotPath} alt={getScreenshotText(screenshotPath)} />
        </IonCard>
    );
}

const OurWorkContainer: React.FC<ContainerProps> = ({ screenshots }) => {

    let screenshotIndex = 1;

    return (
        <IonCardContent className="ion-padding ion-text-center">
            <div className="screenshot-container">
                {screenshots.map((screenshot) => renderScreenshot(screenshot, screenshotIndex ++))}
            </div>
        </IonCardContent>
    );
};

export default OurWorkContainer;
