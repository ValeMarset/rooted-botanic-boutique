import styles from "./OurService.module.css";
import React from "react";

export default function OurService() {
  return (
    <section className="text-center" id={styles.bgColor}>
      <div className="container py-5">
        <h1 className="fw-semibold">Our Services</h1>
        <p className="mb-5">We have a lot of natural solutions to make your green experience easier!</p>
        <div className="row">
          <div className="col-6 col-lg-3 mb-4">
            <img src="/img/ourServices/chemical.png" className="w-25 mb-3" alt="agriculture-pesticide" />
            <h4> Pesticides</h4>
            <p className={`${styles.textServices}`}>In Rooted, we help you find a specific solution for a specific plague.</p>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <img src="img/ourServices/hierba.png" className="w-25 mb-3" alt="hierba" />
            <h4>Pond Plants</h4>
            <p className={`${styles.textServices}`}>We will help you chose appropiate pond plants.</p>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <img src="img/ourServices/tractor.png" className="w-25 mb-3" alt="tractor" />
            <h4>Big farmers</h4>
            <p className={`${styles.textServices}`}>We offer full counseling for bigger producers.</p>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <img src="img/ourServices/solar-energy.png" className="w-25 mb-3" alt="solar energy" />
            <h4>Sunny spaces</h4>
            <p className={`${styles.textServices}`}>If you need strong and resistant plants, you will find them here.</p>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <img src="/img/ourServices/plant-in-the-ground.png" alt="plant in the ground" className="w-25 mb-3" />
            <h4>Seeding</h4>
            <p className={`${styles.textServices}`}>We have a huge seed bank, from which you can take for free!</p>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <img src="img/ourServices/plant.png" alt="plant" className="w-25 mb-3" />
            <h4>Healthy Plants</h4>
            <p className={`${styles.textServices}`}>If your plants are sick, we have a plant clinic to heal them.</p>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <img src="img/ourServices/planet.png" alt="planet" className="w-25 mb-3" />
            <h4>Thinking in the future</h4>
            <p className={`${styles.textServices}`}>Our planet's health is a priority, that's why we don't use chemical pesticides.</p>
          </div>
          <div className="col-6 col-lg-3 mb-4">
            <img src="/img/ourServices/plantation.png" alt="plantation" className="w-25 mb-3" />
            <h4>Orchard</h4>
            <p className={`${styles.textServices}`}>We also have a lot of tips and paraphernalia to build your own orchard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
