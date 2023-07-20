let city = [
    // Andaman and Nicobar Islands
    "Port Blair",
  
    // Andhra Pradesh
    "Visakhapatnam",
    "Vijayawada",
    "Tirupati",
  
    // Arunachal Pradesh
    "Itanagar",
  
    // Assam
    "Guwahati",
    "Tezpur",
  
    // Bihar
    "Patna",
    "Gaya",
  
    // Chandigarh
    "Chandigarh",
  
    // Chhattisgarh
    "Raipur",
    "Bilaspur",
  
    // Dadra and Nagar Haveli and Daman and Diu
    "Daman",
  
    // Delhi
    "New Delhi",
  
    // Goa
    "Panaji",
    "Margao",
  
    // Gujarat
    "Ahmedabad",
    "Surat",
    "Vadodara",
  
    // Haryana
    "Gurugram",
    "Faridabad",
    "Chandigarh",
  
    // Himachal Pradesh
    "Shimla",
    "Manali",
  
    // Jharkhand
    "Ranchi",
    "Jamshedpur",
  
    // Karnataka
    "Bengaluru",
    "Mysuru",
    "Hubballi",
  
    // Kerala
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
  
    // Ladakh
    "Leh",
  
    // Lakshadweep
    "Kavaratti",
  
    // Madhya Pradesh
    "Indore",
    "Bhopal",
    "Gwalior",
  
    // Maharashtra
    "Mumbai",
    "Pune",
    "Nagpur",
  
    // Manipur
    "Imphal",
  
    // Meghalaya
    "Shillong",
  
    // Mizoram
    "Aizawl",
  
    // Nagaland
    "Kohima",
  
    // Odisha
    "Bhubaneswar",
    "Cuttack",
  
    // Puducherry
    "Puducherry",
  
    // Punjab
    "Amritsar",
    "Ludhiana",
  
    // Rajasthan
    "Jaipur",
    "Jodhpur",
    "Udaipur",
  
    // Sikkim
    "Gangtok",
  
    // Tamil Nadu
    "Chennai",
    "Coimbatore",
    "Madurai",
  
    // Telangana
    "Hyderabad",
    "Warangal",
  
    // Tripura
    "Agartala",
  
    // Uttar Pradesh
    "Lucknow",
    "Kanpur",
    "Varanasi",
  
    // Uttarakhand
    "Dehradun",
    "Haridwar",
  
    // West Bengal
    "Kolkata",
    "Siliguri"
];
city =  [...new Set(city)];

let state = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];
state =  [...new Set(state)];

let collegeType = [
    'Public',
    'Private',
    'Govt.',
    'Deamed'
];
collegeType =  [...new Set(collegeType)];

export {city,state,collegeType};