function town(arr) {

    for(const line of arr) {
        let [town, latitude, longitude] = line.split(' | ');
        let obj = {
            town,
            latidute : Number(latitude).toFixed(2),
            longitude : Number(longitude).toFixed(2)
        }
        console.log(obj)
    }

}
town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)