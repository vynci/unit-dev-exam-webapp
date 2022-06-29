const franchisee = [
    {"_id":"62b04a71d808a04afe83d49e","first_name":"Lillie","last_name":"Holden","location_ids":["62b04a71d808a04afe83d49f","62b04a71d808a04afe83d4a0","62b04a71d808a04afe83d4a1"]},
    {"_id":"62b04a71d808a04afe83d4a2","first_name":"Frank","last_name":"Morel","location_ids":["62b04a71d808a04afe83d4a3","62b04a71d808a04afe83d4a4","62b04a71d808a04afe83d4a5","62b04a71d808a04afe83d4a6"]},
    {"_id":"62b04a71d808a04afe83d4a7","first_name":"Garrett","last_name":"Curry","location_ids":["62b04a71d808a04afe83d4a8"]},
    {"_id":"62b04a71d808a04afe83d4a9","first_name":"Gene","last_name":"Brunet","location_ids":["62b04a71d808a04afe83d4aa"]},
    {"_id":"62b04a71d808a04afe83d4ab","first_name":"Christine","last_name":"Thorpe","location_ids":["62b04a71d808a04afe83d4ac","62b04a71d808a04afe83d4ad","62b04a71d808a04afe83d4ae","62b04a71d808a04afe83d4af","62b04a71d808a04afe83d4b0"]},
    {"_id":"62b04a71d808a04afe83d4b1","first_name":"Daisy","last_name":"Coppola","location_ids":["62b04a71d808a04afe83d4b2","62b04a71d808a04afe83d4b3","62b04a71d808a04afe83d4b4","62b04a71d808a04afe83d4b5","62b04a71d808a04afe83d4b6"]},
    {"_id":"62b04a71d808a04afe83d4b7","first_name":"Lulu","last_name":"Nichols","location_ids":["62b04a71d808a04afe83d4b8","62b04a71d808a04afe83d4b9"]},
    {"_id":"62b04a71d808a04afe83d4ba","first_name":"Lula","last_name":"Calosi","location_ids":["62b04a71d808a04afe83d4bb","62b04a71d808a04afe83d4bc","62b04a71d808a04afe83d4bd","62b04a71d808a04afe83d4be"]},
    {"_id":"62b04a71d808a04afe83d4bf","first_name":"Edwin","last_name":"Welch","location_ids":["62b04a71d808a04afe83d4c0"]},
    {"_id":"62b04a71d808a04afe83d4c1","first_name":"Blake","last_name":"Beni","location_ids":["62b04a71d808a04afe83d4c2"]},
    {"_id":"62b04a71d808a04afe83d4c3","first_name":"Norman","last_name":"Nash","location_ids":["62b04a71d808a04afe83d4c4"]},
    {"_id":"62b04a71d808a04afe83d4c5","first_name":"Rosie","last_name":"Roche","location_ids":["62b04a71d808a04afe83d4c6","62b04a71d808a04afe83d4c7","62b04a71d808a04afe83d4c8","62b04a71d808a04afe83d4c9"]},
    {"_id":"62b04a71d808a04afe83d4ca","first_name":"Trevor","last_name":"Viviani","location_ids":["62b04a71d808a04afe83d4cb"]},
    {"_id":"62b04a71d808a04afe83d4cc","first_name":"Ernest","last_name":"Bernardini","location_ids":["62b04a71d808a04afe83d4cd","62b04a71d808a04afe83d4ce"]},
    {"_id":"62b04a71d808a04afe83d4cf","first_name":"Jeffrey","last_name":"Morel","location_ids":["62b04a71d808a04afe83d4d0","62b04a71d808a04afe83d4d1"]},
    {"_id":"62b04a71d808a04afe83d4d2","first_name":"Marian","last_name":"Fontana","location_ids":["62b04a71d808a04afe83d4d3","62b04a71d808a04afe83d4d4","62b04a71d808a04afe83d4d5","62b04a71d808a04afe83d4d6"]},
    {"_id":"62b04a71d808a04afe83d4d7","first_name":"Miguel","last_name":"Casey","location_ids":["62b04a71d808a04afe83d4d8","62b04a71d808a04afe83d4d9","62b04a71d808a04afe83d4da","62b04a71d808a04afe83d4db","62b04a71d808a04afe83d4dc"]},
    {"_id":"62b04a71d808a04afe83d4dd","first_name":"Anthony","last_name":"Krämer","location_ids":["62b04a71d808a04afe83d4de"]},
    {"_id":"62b04a71d808a04afe83d4df","first_name":"Millie","last_name":"Pettini","location_ids":["62b04a71d808a04afe83d4e0","62b04a71d808a04afe83d4e1","62b04a71d808a04afe83d4e2","62b04a71d808a04afe83d4e3"]},
    {"_id":"62b04a71d808a04afe83d4e4","first_name":"Daniel","last_name":"Chiarini","location_ids":["62b04a71d808a04afe83d4e5","62b04a71d808a04afe83d4e6","62b04a71d808a04afe83d4e7","62b04a71d808a04afe83d4e8"]},
    {"_id":"62b04a71d808a04afe83d4e9","first_name":"Jean","last_name":"Jacobs","location_ids":["62b04a71d808a04afe83d4ea","62b04a71d808a04afe83d4eb","62b04a71d808a04afe83d4ec","62b04a71d808a04afe83d4ed","62b04a71d808a04afe83d4ee"]},
    {"_id":"62b04a71d808a04afe83d4ef","first_name":"Allie","last_name":"de Jong","location_ids":["62b04a71d808a04afe83d4f0","62b04a71d808a04afe83d4f1","62b04a71d808a04afe83d4f2","62b04a71d808a04afe83d4f3"]},
    {"_id":"62b04a71d808a04afe83d4f4","first_name":"Bruce","last_name":"Wells","location_ids":["62b04a71d808a04afe83d4f5"]}
];

const getFranchiseeData = ()=> franchisee;

export default getFranchiseeData;