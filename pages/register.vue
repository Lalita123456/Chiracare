<template>
  <div class="bg-container">
    <section>
      <div class="logo my-3">
        <img
          src="/pictures/logo.png"
          style="width: 250px; display: flex; margin: 0 auto"
        />
      </div>
    </section>

    <section class="container">
      <form action="#">
        <div>
          <label for="email" class="font-semibold"> ชื่อ (name) </label>
          <input
            class="flex p-3.5 my-2 mx-auto w-full rounded-lg border-2 border-slate-200"
            type="text"
            placeholder=""
            name="email"
            id="email"
            required
          />
        </div>
        <div>
          <label for="email" class="font-semibold"> นามสกุล (surname) </label>
          <input
            class="flex p-3.5 my-2 mx-auto w-full rounded-lg border-2 border-slate-200"
            type="text"
            placeholder=""
            name="email"
            id="email"
            required
          />
        </div>

        <div>
          <label for="email" class="font-semibold">
            เลขบัตรประชาชน (ID card number)
          </label>
          <input
            class="flex p-3.5 my-2 mx-auto w-full rounded-lg border-2 border-slate-200"
            type="text"
            placeholder="xxx-xxx-xxxx"
            name="email"
            id="email"
            required
          />
        </div>

        <div>
          <label for="email" class="font-semibold">
            หมายเลขโทรศัพท์ (phone number)
          </label>
          <input
            class="flex p-3.5 my-2 mx-auto w-full rounded-lg border-2 border-slate-200"
            type="tel"
            placeholder="xxx-xxx-xxxx"
            name="phone"
            id="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </div>

        <div>
          <label for="email" class="font-semibold"> ไลน์ไอดี (LINE ID) </label>
          <input
            class="flex p-3.5 my-2 mx-auto w-full rounded-lg border-2 border-slate-200"
            type="text"
            placeholder="xxxxxxx"
            name="email"
            id="email"
            required
          />
        </div>

        <div>
          <label for="email" class="font-semibold">
            กรุณาเลือกสถานะ (status)
          </label>
          <select
            name="cars"
            class="flex p-3.5 my-2 mx-auto w-full text-sm rounded-xl border-2 border-slate-200"
            placeholder="ยังไม่ได้เลือกสถานะ"
            required
          >
            <option value="ยังไม่ได้เลือกสถานะ">ยังไม่ได้เลือกสถานะ</option>
            <option value="Admin">Admin</option>
            <option value="VHV">VHV (อาสาสมัครสาธารณสุข)</option>
            <option value="OPD">OPD (ผู้ป่วยนอก)</option>
          </select>
        </div>

        <div>
          <label for="email" class="font-semibold"> รหัสผ่าน </label>
          <input
            class="flex p-3.5 my-2 mx-auto w-full rounded-lg border-2 border-slate-200"
            type="password"
            placeholder=""
            name="password"
            id="password"
            required
          />
        </div>
        <div class="flex flex-wrap">
          <button type="submit" class="btn-reg">
            <a href="/login">ลงทะเบียน</a>
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script setup></script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
}

#btn {
  max-width: 700px;
  margin: 0.5rem 3rem;
}

.btn-reg {
  width: 500px;
  height: 50px;
  border-radius: 10px;
  background: #1f3f99;
  margin: 0.5rem auto;
  font-size: 20px;
  color: #fff;
}
</style>
