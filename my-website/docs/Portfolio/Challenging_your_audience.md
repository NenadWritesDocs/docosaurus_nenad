In gamification context, content creation involves missions, leaderboards, and rewards (badges and pins) in Peregrine. Missions challenge users with tasks, leaderboards increase competition, and badges signify accomplishments. This article guides you on how to create automated rules for rewarding players and building leaderboards based on their interactions.

# Introduction

In the gamification context, creating content that challenges the audience often involves the design of missions, leaderboards, and rewards such as badges and pins. You can achieve this in Peregrine by creating items, statistics, missions with objectives, and executing rules. The complexity of the setup may very from the gamification experience type that you want to create. 

Missions - Missions are specific tasks or objectives that users need to complete within a gamified system or application. Design missions so that they are challenging but achievable, encouraging engagement and participation. They can vary in complexity and can include activities like completing certain in-game actions, answering quizzes, or achieving specific goals.

Leaderboards (Statistics) - Leaderboards are a competitive feature that ranks users based on their performance or achievements. They create a sense of competition and motivate users to excel and outperform others. Leaderboards can be global, showing the top performers across all users, or segmented to show rankings within specific groups or categories.

Badges and Pins (Items) - Badges and pins serve as visual representations of accomplishments or milestones within a gamified system. They can be awarded for completing missions, achieving high scores, or hitting specific targets. Badges and pins provide a sense of recognition and accomplishment for users.

Example

In this example you will learn how to create an automated rule that rewards players based on the number of videos they watched on your streaming platform. In addition to this, you will learn how to create a leaderboard.

Step #1 - Create a reward badge

You can start this setup by creating an item class called Badges in which you will store different badges as items.

Tip

To associate these items with the player statistics, you must add a Text property field called StatName so that you can add the player statsitic that is item is associated to.

For this scenario, create badges based on the achievements of the users of your platform. For example, you can create the following items:

Binge Badge - watched five episodes
Binge Badge - Watched ten episodes
Huge Fan - Became a fan of a TV Show
Favorite - Added video to favorites

Step #2 - Create a player statistic

The next step in the setup is to create a player statistic that will be used in by the Rule Editor. This player statistic will be used to determine the leaderboard of your users based on their performance or interaction with your platform. To create a player statistic go to Config > Statistics > Create Leaderboard.

Step #3 - Create custom events

The next step is to configure a custom event that will be used in Rule Editor to trigger an action. In this scenario, the result of this action will be a badge rewarded to the player. It is considered a good practice to follow this naming convention when creating custom events: subject_predicate_object (player_watched_video). To create a custom event go to Config > Custom Events.

Step #4 - Create a mission with objectives

In the Step #4 you need to configure a mission with objectives. The objectives should be clear and manageable tasks for your players to complete in order to achieve the designed goal. This can be anything from adding information to their profile, sharing the app to social media platforms or performing actions within the platform.

When creating a mission objective, you must select a trigger. In this case, the trigger should be the previously created custom event. If you create an objective called “player_watched_add” add this custom event to the trigger field. 

Each objective can contain a reward, that will be granted to the player once the objective is completed.




Step #5 - Create a rule 

The final step in this procedure is to create a rule that will use the previously created elements to grant the item to the player and update the player statistic once the player watches a video. 

To create a rule go to Rule Editor > Create Rule. Define the rule in the following way:

EventName: Select the custom event your previously created.
Actions: Select Grant Item and Update Player Statistic. This way, when a player watches a video they will receive a badge, and their player statistic will be updated. You can use this statistic to create a leaderboard.

Advanced rule settings - using conditions

In a more advanced scenario, you can create a rule that grants an item to the user once they reach a certain threshold (after they watch five videos, for example). You can achieve this by adding conditions to your rule. To learn more about this, check the Advanced Peregrine recipes cookbook.