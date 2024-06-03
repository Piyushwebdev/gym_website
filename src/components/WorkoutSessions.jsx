import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Elevate your fitness with our high-intensity interval training (HIIT) session, designed to burn maximum calories and build strength fast. Join us for an energizing workout that challenges all fitness levels and leaves you feeling empowered.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Discover the perfect bootcamp to match your fitness goals, from strength and conditioning to weight loss and beginner-friendly programs. Elevate your workout routine and achieve exceptional results with our expert-led sessions.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength and Conditioning Bootcamp.</h4>
            <p>
            Unleash your full potential with our Strength and Conditioning Bootcamp. Improve your power, endurance, and overall fitness through high-intensity functional training.
            </p>
          </div>
          <div>
            <h4>HIIT Bootcamp.</h4>
            <p>
            Transform your body with our HIIT Bootcamp, designed to burn fat and build muscle fast. Experience dynamic workouts combining cardio and strength exercises for maximum results.
            </p>
          </div>
          <div>
            <h4>Weight Loss Bootcamp.</h4>
            <p>
            Achieve your weight loss goals with our focused Weight Loss Bootcamp. Engage in tailored workouts and nutrition plans that help you shed pounds effectively and sustainably.
            </p>
          </div>
          <div>
            <h4>Functional Fitness Bootcamp.</h4>
            <p>
            Enhance your everyday performance with our Functional Fitness Bootcamp. This program focuses on exercises that improve flexibility, coordination, and balance for better daily movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
