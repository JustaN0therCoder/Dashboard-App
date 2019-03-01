<?php

namespace App\Http\Controllers\Api;

use App\Chart;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "charts";


class ChartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $xxcharts = Chart::all();

        return response()->json($xxcharts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return Chart::create([
        //   'type' => $request['chart'],
        //   'Name' => 'TEMP_ITEM_'.$request['name'],
        //   'Connection' => 3,
        //   'created_at' => '2019-02-28 15:23:23',
        //   'updated_at' => '2019-02-28 15:23:23'
        // ]);
        // return $request->all();
        // $conn = new mysqli($servername, $username, $password, $dbname);
        // if ($conn->connect_error) {
        //   die("Connection failed: " . $conn->connect_error);
        // }
        // $sql = "UPDATE charts SET type=4 WHERE id=16";
        // if ($conn->query($sql) === TRUE) {
        //   return ['Message' => "Record updated successfully"];
        // } else {
        //   return ['Message' => "Error updating record: ".$conn->error];
        // }
        // Chart::table('charts')
        //               ->where('id', 16)
        //               ->update(aray('Name', 'Howdy 2: Electric Boogaloo'));
        $chart = Chart::find($request['id']);
        $chart->type =$request['chart'];
        $chart->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
