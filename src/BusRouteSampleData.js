// Fake data for Bus routes to render markers
// Acquired by requesting GET [http://api.actransit.org/transit/route/6/vehicles/?token=(AC TRANSIT TOKEN)]
const BusRouteSampleData =  [
    {
        "VehicleId": 1346,
        "CurrentTripId": 6568088,
        "Latitude": 37.817626953125,
        "Longitude": -122.267539978027,
        "Heading": 11,
        "TimeLastReported": "2019-04-21T10:45:37"
    },
    {
        "VehicleId": 1344,
        "CurrentTripId": 6568089,
        "Latitude": 37.866886138916,
        "Longitude": -122.266128540039,
        "Heading": 83,
        "TimeLastReported": "2019-04-21T10:45:35"
    },
    {
        "VehicleId": 1347,
        "CurrentTripId": 6568090,
        "Latitude": 37.8712005615234,
        "Longitude": -122.26586151123,
        "Heading": 355,
        "TimeLastReported": "2019-04-21T10:45:40"
    },
    {
        "VehicleId": 1342,
        "CurrentTripId": 6568095,
        "Latitude": 37.8600158691406,
        "Longitude": -122.25904083252,
        "Heading": 5,
        "TimeLastReported": "2019-04-21T10:45:48"
    },
    {
        "VehicleId": 1340,
        "CurrentTripId": 6568137,
        "Latitude": 37.802074432373,
        "Longitude": -122.274223327637,
        "Heading": 298,
        "TimeLastReported": "2019-04-21T10:45:48"
    }
]
   
export default BusRouteSampleData;