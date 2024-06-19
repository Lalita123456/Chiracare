<template>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Card</title>
    
</head>
<body>
    <div class="data-card">
        <h3 class="data-card-header">โปรไฟล์ผู้ป่วย</h3>
        <img src="C:\Users\rilra\OneDrive\เดสก์ท็อป\Chira Care\Chiracare\pictures\profile.jpg" alt="profile">
        <p class="data-card-name">ชื่อ:ROSÉ</p>
        <p class="data-card-key">อายุ:</p>
        <p class="data-card-key">สถานะปัจจุบัน:</p>
        <p class="data-card-key">ประเภทโรค:</p>
        <p class="data-card-key">กลุ่มผู้ป่วย:</p>
        <p class="data-card-key">ประเภทผู้ป่วย:</p>
        <p class="data-card-key">เลขบัตรประจำตัวประชาชน:</p>
        <p class="data-card-key">วันเกิด:</p>
        <p class="data-card-key">เบอร์โทรศัพท์:</p>
        <p class="data-card-key">เบอร์ฉุกเฉิน:</p>
        <p class="data-card-key">ที่อยู่:</p>
        <p class="data-card-key">ข้อมูลเพิ่มเติม:</p>
    </div>

        <div class="search-bar">
          <input type="text" placeholder="ค้นหาที่นี่...">
          <button>ค้นหา</button>
        </div>
</body>
</html>
</template>

<style>
        .data-card {
            display: flex;
            flex-direction: column;
            border: 1px solid #ccc;
            padding: 15px;
            margin: 10px;
            width: 300px;
        }

        .data-card-header {
            font-weight: bold;
            margin-bottom: 10px;
            text-align: center;
        }
        .data-card-name {
            color: #000000;
            margin-bottom: 5px;
            text-align: center;
        }

        .data-card-key {
            color: #000000;
            margin-bottom: 5px;
        }

        .data-card-value {
            margin-bottom: 10px;
        }
        .arrow-left {
            display: inline-block;
            width: 10px;
            height: 10px;
            border: 2px solid black;
            border-left: none;
            transform: rotate(-45deg);
          }
          
          button {
            padding: 10px;
            border: 1px solid black;
            cursor: pointer;
          }
          .search-bar {
            display: block;
            margin-bottom: 20px;
          }
          
          .search-bar input {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 250px;
            height: 20px;
          }
          
          .search-bar button {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            cursor: pointer;
            height: 40px;
          }
    </style>