# Personalized Class Recommendation System for Lululemon

## Overview

This project was developed as part of the BrainStation Data Science Diploma Industry Project in partnership with Lululemon. Our mission: **Leverage the Lululemon app to understand, personalize, and scale community engagement, creating meaningful, loyalty-building wellness experiences.**

We built a machine learning-powered recommendation engine, an interactive demo web app (quiz, recommendations, Q&A), and a dashboard to track engagement and impact.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [How It Works](#how-it-works)
- [Dataset](#dataset)
- [Tech Stack](#tech-stack)
- [Impact Tracking](#impact-tracking)
- [Next Steps](#next-steps)
- [Team](#team)
- [Q&A](#qa)

---

## Features

- **Personality Quiz**: Users answer a fun quiz about their wellness goals, preferences, and habits.
- **Personalized Class Recommendations**: Unlock tailored class suggestions (in-person or online) based on quiz results, profile, and purchase history.
- **Discount Incentive**: Receive a 10% discount for completing the quiz.
- **Product Promotion**: Relevant Lululemon products are recommended alongside classes.
- **Feedback Loop**: Users can rate and provide feedback on recommendations, improving future suggestions.
- **Dashboard**: Visualizes key engagement metrics for Lululemon stakeholders.

---

## Demo

- **Web App**:  
  - Take the quiz, receive personalized recommendations, and explore the Q&A and recommendations pages.

---

## How It Works

1. **User Data Collection**  
   Gather quiz responses, profile information, and purchase history.

2. **Feature Engineering**  
   Transform user and class attributes into model-ready features (categorical encoding, embeddings, etc.).

3. **Cosine Similarity Matching**  
   Compare user and class vectors to find the best matches using cosine similarity.

4. **Recommendation Delivery**  
   Present personalized class suggestions to the user.

5. **Feedback Collection**  
   Gather user feedback to refine future recommendations (continuous learning loop).

---

## Dataset

| Feature                | Description                        | Data Type      | Examples/Values                                 |
|------------------------|------------------------------------|---------------|------------------------------------------------|
| Age                    | User's age                         | Integer       | 26                                             |
| Location               | User's location                    | String        | Toronto, Canada                                |
| Gender                 | User's gender                      | Categorical   | Female, Male, Other, Prefer not to say         |
| Purchase History       | Record of past purchases           | JSON list     | [{item: "Align leggings", date: "2024-05-01"}] |
| Wellness Goals         | Main wellness goal                 | Categorical   | Get healthier, Lose weight, Mental health      |
| Class Environment      | Preferred class vibe               | Categorical   | High energy, Relaxing, Community-focused       |
| Preferred Workout Time | Preferred time of day              | Categorical   | Morning, Afternoon, Evening                    |
| Favorite Activity      | Most frequent/favorite activity    | Categorical   | Yoga, Pilates, Weight training, HIIT           |
| Motivation             | Main reason for activity           | Categorical   | Challenge, Relaxation, Social Connection       |

---

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: Python (Flask/FastAPI)
- **Machine Learning**: Scikit-learn, Pandas, NumPy
- **Database**: SQLite
- **Deployment**: (Heroku, AWS, Vercel, etc.)

---

## Impact Tracking

We track the following metrics to measure the effectiveness of our recommendations:

- **Click-Through Rate (CTR)**: % of users who click recommended classes
- **Conversion Rate**: % of recommendations leading to class sign-ups
- **Adoption/Take Rate**: % of users attending recommended classes
- **App Engagement**: Time spent on the app
- **Class Rating**: User feedback scores

---

## Next Steps

- **Progress Tracking**: Enable users to see their achievements and progress.
- **Gamification**: Add badges, leaderboards, and monthly winners.
- **Loyalty Rewards**: Introduce rewards for frequent engagement.
- **Group Classes**: Recommend and organize group classes for social motivation.

---

## Team

- Mili Thakrar
- Elham Rahimi
- James Ahn
- Helios Cao
- Syed Ahmed

---

## Q&A

For questions or feedback, please open an issue or contact the team!

---

**_Thank you for exploring our project!_**
