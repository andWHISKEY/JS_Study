const fetch=require('node-fetch');
const baseUrl="https://zelight.vercel.app";
const API_1=`${baseUrl}/api/20210608/getUserIds`;
const API_2=`${baseUrl}/api/20210608/getUserDetails`;
const API_3=`${baseUrl}/api/20210608/getUserOriginByName`;

const main=async () => {

    const start=new Date().getTime();

    //API 1
    const res=await fetch(API_1, {headers: {'permission': "20210629"}});
    const json_1=await res.json();
    //console.log(json_1);

    for(let value in json_1.data.userIds) {
        var id=json_1.data.userIds[value];
        const res1=await fetch(API_2+'?userId='+id, {headers: {'permission': "20210629"}});
        const json_2=await res1.json();
        // console.log(json_2);

        var name=json_2.data.user.name
        var encodeStr=encodeURI(API_3+'?userName='+name)
        const res2=await fetch(encodeStr, {headers: {'permission': "20210629"}}); // encoding구현 X
        const json_3=await res2.json();
        console.log(json_2, json_3.data.Origin);

    }

    const end=new Date().getTime();
    const _interval=end-start;
    console.log(_interval);
};

main();


