/* ==========================================================================
   GYM PRO - LocalStorage Database & Seed Initialization Helper
   ========================================================================== */

(function () {
  const KEYS = {
    MEMBERS: 'gymMembers',
    PLANS: 'gymPlans',
    WORKOUTS: 'gymWorkouts',
    DIETS: 'gymDiets',
    DIET_PLANS: 'gymDietPlans',
    PAYMENTS: 'gymPayments',
    LOGGED_IN_MEMBER: 'loggedInMember',
    LOGGED_IN_ROLE: 'loggedInRole'
  };

  // Initial Seed Data for immediate out-of-the-box demo
  const initialPlans = [
    { id: 'plan_1', name: 'Basic Plan', duration: '1 Month', price: 999, description: 'Standard gym access, basic cardio & weights', status: 'Active' },
    { id: 'plan_2', name: 'Premium Plan', duration: '3 Months', price: 2499, description: 'Full gym access, group fitness, locker facility', status: 'Active' },
    { id: 'plan_3', name: 'Gold VIP Plan', duration: '6 Months', price: 4499, description: 'All-inclusive VIP access, personal trainer & diet plan', status: 'Active' }
  ];

  const initialMembers = [
    {
      id: 'MEM-101',
      name: 'Alex Johnson',
      age: 24,
      phone: '9876543210',
      email: 'alex@example.com',
      dob: '2002-05-14',
      password: 'user123',
      plan: 'Gold VIP Plan',
      status: 'Active',
      weight: 74
    },
    {
      id: 'MEM-102',
      name: 'Sophia Miller',
      age: 22,
      phone: '9876543211',
      email: 'sophia@example.com',
      dob: '2004-08-20',
      password: 'user123',
      plan: 'Premium Plan',
      status: 'Active',
      weight: 60
    },
    {
      id: 'MEM-103',
      name: 'David Lee',
      age: 28,
      phone: '9876543212',
      email: 'david@example.com',
      dob: '1998-11-03',
      password: 'user123',
      plan: 'Basic Plan',
      status: 'Inactive',
      weight: 82
    }
  ];

  const initialWorkouts = [
    { id: 'w_1', member: 'Alex Johnson', day: 'Monday', workout: 'Chest & Triceps (Bench Press 4x10, Incline Dumbbell Press 3x12, Cable Flyes 3x15, Tricep Pushdowns 4x12)', duration: '60 mins' },
    { id: 'w_2', member: 'Alex Johnson', day: 'Tuesday', workout: 'Back & Biceps (Lat Pulldowns 4x10, Seated Rows 3x12, Barbell Curls 4x10)', duration: '50 mins' },
    { id: 'w_3', member: 'Alex Johnson', day: 'Wednesday', workout: 'Legs & Core (Squats 4x10, Leg Press 3x12, Leg Curls 3x15, Planks 3x60s)', duration: '60 mins' },
    { id: 'w_4', member: 'Alex Johnson', day: 'Thursday', workout: 'Shoulders & Abs (Overhead Press 4x10, Lateral Raises 4x15, Ab Crunches 3x20)', duration: '45 mins' },
    { id: 'w_5', member: 'Alex Johnson', day: 'Friday', workout: 'Full Body HIIT & Cardio (Treadmill Sprint 20 min, Kettlebell Swings 4x15)', duration: '45 mins' },
    { id: 'w_6', member: 'Alex Johnson', day: 'Saturday', workout: 'Active Recovery & Stretching', duration: '30 mins' },
    { id: 'w_7', member: 'Alex Johnson', day: 'Sunday', workout: 'Rest Day', duration: '0 mins' },

    { id: 'w_8', member: 'Sophia Miller', day: 'Monday', workout: 'Legs & Glutes (Squats 4x12, Lunges 3x15, Hip Thrusts 4x12)', duration: '50 mins' },
    { id: 'w_9', member: 'Sophia Miller', day: 'Wednesday', workout: 'Upper Body Toning (Dumbbell Press 3x12, Lat Pulldowns 3x12, Shoulder Press 3x12)', duration: '45 mins' },
    { id: 'w_10', member: 'Sophia Miller', day: 'Friday', workout: 'Cardio & Pilates', duration: '40 mins' }
  ];

  const initialDietPlans = [
    {
      id: 'diet_101',
      member: 'Alex Johnson',
      week: 'Week 1',
      planType: '7-Day Plan',
      status: 'Assigned',
      meals: {
        Monday: { Breakfast: '4 Egg Whites + Oatmeal + Almonds', Lunch: 'Grilled Chicken Breast + Brown Rice + Broccoli', 'Evening Snack': 'Protein Shake + Green Apple', Dinner: 'Paneer / Fish + Mixed Salad' },
        Tuesday: { Breakfast: 'Oats Smoothie + Peanut Butter', Lunch: 'Quinoa + Chicken Curry + Salad', 'Evening Snack': 'Boiled Chana / Sprouts', Dinner: 'Grilled Paneer + Steamed Vegetables' },
        Wednesday: { Breakfast: 'Egg Omelette + Whole Wheat Toast', Lunch: 'Dal + Brown Rice + Tofu / Chicken', 'Evening Snack': 'Greek Yogurt + Berries', Dinner: 'Lean Steak / Paneer + Salad' },
        Thursday: { Breakfast: 'Protein Pancakes + Banana', Lunch: 'Turkey / Chicken Wrap + Mixed Greens', 'Evening Snack': 'Almonds + Green Tea', Dinner: 'Grilled Fish + Asparagus' },
        Friday: { Breakfast: '3 Scrambled Eggs + Avocado Toast', Lunch: 'Brown Rice + Rajma / Chicken + Salad', 'Evening Snack': 'Whey Protein Shake', Dinner: 'Tofu / Chicken Stir-fry' },
        Saturday: { Breakfast: 'Fruit Bowl + Chia Pudding', Lunch: 'Grilled Chicken + Sweet Potato', 'Evening Snack': 'Handful of Nuts', Dinner: 'Soup + Grilled Vegetables' },
        Sunday: { Breakfast: 'Pancakes / Eggs to order', Lunch: 'Cheat Meal / Balanced Whole Food', 'Evening Snack': 'Fruit Smoothie', Dinner: 'Light Salad + Cottage Cheese' }
      }
    },
    {
      id: 'diet_102',
      member: 'Sophia Miller',
      week: 'Week 1',
      planType: '7-Day Plan',
      status: 'Assigned',
      meals: {
        Monday: { Breakfast: 'Avocado Toast + 2 Poached Eggs', Lunch: 'Quinoa Salad with Feta & Chickpeas', 'Evening Snack': 'Handful of Almonds', Dinner: 'Grilled Salmon + Spinach' },
        Tuesday: { Breakfast: 'Berry Protein Smoothie', Lunch: 'Grilled Tofu + Brown Rice', 'Evening Snack': 'Sliced Cucumber + Hummus', Dinner: 'Mixed Vegetable Soup + Toast' },
        Wednesday: { Breakfast: 'Oatmeal with Honey & Chia Seeds', Lunch: 'Chicken Breast + Garden Salad', 'Evening Snack': 'Green Tea + Roasted Gram', Dinner: 'Paneer Skewers + Salad' },
        Thursday: { Breakfast: 'Fruit Bowl + Greek Yogurt', Lunch: 'Lentil Soup + Quinoa', 'Evening Snack': 'Walnuts & Dried Figs', Dinner: 'Steamed Fish + Vegetables' },
        Friday: { Breakfast: 'Egg White Omelette + Spinach', Lunch: 'Turkey Sandwich on Whole Grain', 'Evening Snack': 'Apple Slices + Peanut Butter', Dinner: 'Grilled Tofu + Sauteed Mushrooms' },
        Saturday: { Breakfast: 'Smoothie Bowl with Granola', Lunch: 'Mediterranean Salad + Falafel', 'Evening Snack': 'Roasted Makhana', Dinner: 'Clear Soup + Cottage Cheese' },
        Sunday: { Breakfast: 'French Toast + Fresh Berries', Lunch: 'Balanced Grain Bowl', 'Evening Snack': 'Herbal Tea + Biscuits', Dinner: 'Light Vegetable Stew' }
      }
    }
  ];

  const initialPayments = [
    { id: 'PAY-1001', member: 'Alex Johnson', plan: 'Gold VIP Plan', amount: 4499, date: '2026-09-01', status: 'Paid' },
    { id: 'PAY-1002', member: 'Sophia Miller', plan: 'Premium Plan', amount: 2499, date: '2026-09-05', status: 'Paid' },
    { id: 'PAY-1003', member: 'David Lee', plan: 'Basic Plan', amount: 999, date: '2026-08-15', status: 'Overdue' }
  ];

  // Helper getters and setters
  window.DB = {
    KEYS: KEYS,
    init: function () {
      if (!localStorage.getItem(KEYS.PLANS)) {
        localStorage.setItem(KEYS.PLANS, JSON.stringify(initialPlans));
      }
      if (!localStorage.getItem(KEYS.MEMBERS)) {
        localStorage.setItem(KEYS.MEMBERS, JSON.stringify(initialMembers));
      }
      if (!localStorage.getItem(KEYS.WORKOUTS)) {
        localStorage.setItem(KEYS.WORKOUTS, JSON.stringify(initialWorkouts));
      }
      if (!localStorage.getItem(KEYS.DIET_PLANS)) {
        localStorage.setItem(KEYS.DIET_PLANS, JSON.stringify(initialDietPlans));
      }
      if (!localStorage.getItem(KEYS.PAYMENTS)) {
        localStorage.setItem(KEYS.PAYMENTS, JSON.stringify(initialPayments));
      }
    },
    get: function (key) {
      try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
      } catch (e) {
        console.error('Error reading key from localStorage:', key, e);
        return [];
      }
    },
    set: function (key, data) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
      } catch (e) {
        console.error('Error saving key to localStorage:', key, e);
        return false;
      }
    }
  };

  // Run initialization
  window.DB.init();
})();
