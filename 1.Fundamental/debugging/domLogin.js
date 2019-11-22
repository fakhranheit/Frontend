
                        //===========SCRIPT REGISTRASI DAN LOGIN===========
    class User{
        constructor(username, password, role){
            this.username = username
            this.password = password
            this.role = role
        }
    }
    var datausers = [
        new User ('admin', '111', 'Admin'),
        new User ('febian', '123', 'User'),
        new User ('garvin', '123', 'User')
    ]
    var datauserlogin = {}
    const btnlogin=()=>{
        var usernamelogin = document.getElementById('username').value
        var passwordlogin = document.getElementById('password').value
        var arrbaru = datausers.filter((val)=>val.username==usernamelogin&&val.password==passwordlogin)
        datauserlogin=arrbaru[0]
        if (datauserlogin) {
            document.getElementById('isiregislogin').innerHTML = 'Halo ' + datauserlogin.username
                if (datauserlogin.role=='Admin') {
                    Printadmin(listdata)
                    document.getElementById('isiketeranganregislogin').innerHTML = 'Anda terdaftar sebagai ADMIN'
                }
                else{
                    Printdata(listdata)
                    document.getElementById('isiketeranganregislogin').innerHTML = 'Anda terdaftar sebagai USER'
                }
            document.getElementById('btnlogout').innerHTML = `<button onclick='logoutuser()'>Logout</button>`
            }
        else{
            document.getElementById('isiregislogin').innerHTML = 'Maaf, username atau password anda salah'
            document.getElementById('isiketeranganregislogin').innerHTML = ''
            document.getElementById('btnlogout').innerHTML = ``
            }
        }
        const logoutuser=()=>{
            datauserlogin={}
            listcart = []
            Printcart[listcart]
            document.getElementById('isiregislogin').innerHTML = ''
            document.getElementById('isiketeranganregislogin').innerHTML = ''
            document.getElementById('btnlogout').innerHTML = ``
            document.getElementById('body1').innerHTML=''
            document.getElementById('headisikeranjang').innerHTML=''
        }
        const btnregister=()=>{
            var username = document.getElementById('username').value
            var password = document.getElementById('password').value
            datausers.push(new User(username,password,'user'))
            document.getElementById('isiregislogin').innerHTML = 'Selamat bergabung ' + username
            document.getElementById('isiketeranganregislogin').innerHTML = 'Klik LOGIN untuk melanjutkan'
        }


                        //==========SCRIPT USER============

    class List{
        constructor(a,b,c) {
            this.produk=a
            this.harga=b
            this.gambar=c
        }
    }
    var listdata=[
        new List('Mavic Air',1000,'data:image/jpeg;base64,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I8gB5DG0iBjooVAFQBQOgE+zOYgafjvZnSaxNmoqDgHcCCVZTgjcrLgg4JkD1nsZqLE1auxFwcK6I5B5YG4bcr8s++WpEDy5xDgr6PV36e1ld6ip3LkAhlDKRuAPQj555nE6NnFNW7pSmotLWulY3Mz83YKPxfGeme0PZjSa0AamoOQMBwWR188B0IbHuziUS3AaqdW2ooLbdPxSjSUI2HDPuUsXY88Ly9Sc9RLRaHZ3sRo9Hf8Adq1rqQe8tY2MGZQrsueSkjHMDMn00vDxm5z/ABN+hOP9puo0IiJAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAlJcZ7MWaTjVKhidLq9ZXqkU8wLa2LWjn58yfgw9Jdsgvb0ka/hbtla0s1LNYeSIe6CoGboCSTjPWBJOCLnc3/XMzbTW8DU93kqVycgEYOPIkHmPPrNlAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQE4KicxAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED//Z'),
        new List('Phantom 4',2000,'data:image/jpeg;base64,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'),
        new List('Inspire 3',7000,'data:image/jpeg;base64,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')
    ]
    var listcart=[]
    const Printdata=(a)=>{
        var headtable = `<tr>
                            <td>Produk</td>
                            <td>Harga</td>
                            <td>Deskripsi Produk</td>
                            <td>Action</td>
                        </tr>`
        var output=''
        a.forEach((val,index) => {
            output+= `<tr>
                        <td>${val.produk}</td>
                        <td>Rp. ${val.harga}</td>
                        <td> <img src=${val.gambar} height='100px'/> </td>
                        <td><button class="addcart" onclick="onAddCartClick(${index})">Add to Cart</button>              
                    </tr>`
        })
        document.getElementById('body1').innerHTML=headtable+output
    }
    
    const Printcart=(a)=>{
        var output=''
        var jumlah=0
        var totalcart=0
        a.forEach((val,index) => {
            output+= `<tr>
                        <td>${val.produk}</td>
                        <td>Rp. ${val.harga}</td>
                        <td> <img src=${val.gambar} height='100px'/> </td>
                        <td><button class="delete" onclick="onDeleteClick(${index})">Delete</button>              
                    </tr>`
            jumlah++
            totalcart+=val.harga
        });
        document.getElementById('body2').innerHTML=output
        if (jumlah!==0) {
            document.getElementById('headisikeranjang').innerHTML=`Item belanja anda ada ${jumlah}`
            document.getElementById('cart').innerHTML=`Total belanja anda sebesar Rp. ${totalcart}`
            document.getElementById('divbayar').innerHTML=`<button onclick="checkout(),start()">Checkout</button>`
        } else {
            document.getElementById('headisikeranjang').innerHTML=`Keranjang masih kosong`
            document.getElementById('cart').innerHTML = ``           
        }
    }
    const onAddCartClick=(index)=>{
        var addCheck=confirm("Anda yakin mau beli ini?")
        var head=''
        if (addCheck==true) {
            head=   `<tr>
                        <td>Produk</td>
                        <td>Harga</td>
                        <td>gambar</td>
                        <td>Action</td>
                    </tr>`
            document.getElementById('head1').innerHTML=head
            listcart.push(listdata[index])            
        }
        Printcart(listcart)
    }
    const onDeleteClick=(index)=>{
        var deleteCheck=confirm('Anda yakin ingin menghapus barang ini?')
        var head=''
        if (deleteCheck==true) {
            if (listcart.length==1) {
                document.getElementById('head1').innerHTML = head
                document.getElementById('divbayar').innerHTML=''
            }
            listcart.splice(index,1)
        }
        Printcart(listcart)
    }
    function sumArray(array) {
        var output = 0
        for (i=0;i<array.length;i++) {
                output+=array[i]["harga"]
        }
        return output
    }
    var time = 30
    var timer
    function start() {
        time = time + 1
        timer = setInterval(waktu, 1000)
    }
    function waktu() {
        time -= 1
        document.getElementById("timer").innerHTML = `waktu tersisa ${time}`
        if (time <= 0) {
            clearInterval(timer)
            alert("Waktu checkout habis...")
            listcart = []
            // Printcart(listcart)
            document.getElementById('headisikeranjang').innerHTML = `Keranjang masih kosong`
            document.getElementById('cart').innerHTML = ``
            document.getElementById('head1').innerHTML = ''
            document.getElementById('body2').innerHTML = ''
            document.getElementById('divbayar').innerHTML = ''
            document.getElementById('timer').innerHTML = ''
            time = 30
        }
    }
    const checkout=()=>{
        document.getElementById('divbayar').innerHTML=`<input type="number" id="inputbayar" placeholder="Silakan bayar..."><button onclick="bayar()">Bayar</button>`
    }
    const bayar=()=>{
        if (document.getElementById("inputbayar").value < sumArray(listcart)) {
            alert("Uang anda tidak cukup")
        } else if (document.getElementById("inputbayar").value >= sumArray(listcart)) {
            clearInterval(timer)
            alert("Terima Kasih sudah belanja di toko kami. kembalian anda Rp. "+(document.getElementById("inputbayar").value - sumArray(listcart)))
            listcart = []
            // Printcart(listcart)
            document.getElementById('headisikeranjang').innerHTML=`Keranjang masih kosong`
            document.getElementById('cart').innerHTML = ``
            document.getElementById('head1').innerHTML = ''
            document.getElementById('body2').innerHTML = ''
            document.getElementById('divbayar').innerHTML=''
            document.getElementById('timer').innerHTML=''
            timer = 30
        }
    }
    
   
                        //=============SCRIPT ADMIN=====================

    var indexedit=-1
    var indexdel=-2                        
     const Printadmin=(a)=>{
        var headtable = `<tr>
                            <td>Produk</td>
                            <td>Harga</td>
                            <td>Deskripsi Produk</td>
                            <td>Action</td>
                        </tr>`
        var output=''
            a.forEach((val,index) => {
                if(index==indexedit){
                    output+= `<tr>
                    <td><input type="text" id="editproduk${index}"></td>
                    <td><input type="number" id="editharga${index}"></td>
                    <td><input type="text" id="editgambar${index}"></td>
                    <td>
                    <button onclick="cancel()">cancel</button>
                    <button onclick="save(${index})">save</button>
                    </td>              
                    </tr>`
                }
                else if(index==indexdel){
                    output+= `<tr>
                    <td>${val.produk}</td>
                    <td>Rp. ${val.harga}</td>
                    <td> <img src=${val.gambar} height='100px'/> </td>
                    <td>
                    <button onclick="cancelDel()">No</button>
                    <button onclick="confirmDel(${index})">Yes</button>
                    </td>              
                    </tr>`
                }
                else{
                    output+= `<tr>
                            <td>${val.produk}</td>
                            <td>Rp. ${val.harga}</td>
                            <td> <img src=${val.gambar} height='100px'/> </td>
                            <td>
                            <button onclick="hapus(${index})">delete</button>
                            <button onclick="edit(${index})">edit</button>
                            </td>              
                        </tr>`
                }
            })
        var foottable = `<tr>
        <td><input type="text" class="addproduk"></td>
        <td><input type="number" class="addproduk"></td>
        <td><input type="text" class="addproduk"></td>
        <td><button onclick="addproduk()">Add</button></td>
        </tr>
        <tr>
        <td><input type="text" class="searchproduk"></td>
        <td><button onclick="searchproduk()" class="searchproduk">Search</button></td>
        <td><button onclick="back()">Back</button></td>
        </tr>`
            document.getElementById('body1').innerHTML= headtable+output+foottable
    }
    const edit=(bebas)=>{
        indexedit=bebas
        Printadmin(listdata)
    }
    const cancel=()=>{
        indexedit=-1
        Printadmin(listdata)
    }
    const hapus=(bebas)=>{
        indexdel=bebas
        Printadmin(listdata)
    }
    const cancelDel=()=>{
        indexdel=-2
        Printadmin(listdata)
    }
    const confirmDel=(bebas)=>{
        listdata.splice(bebas,1)
        indexdel=-1
        Printadmin(listdata)
    }
    const save=(bebas)=>{ // //sebuah variable yang berisi function dari button save (kegiatan menyimpan kegiatan baru)
        var editproduk=document.getElementById(`editproduk${bebas}`).value // //menampung hasil string kegiatan baru yang diketik user
        var editharga=document.getElementById(`editharga${bebas}`).value // //menampung hari baru yang dipilih user (dalam bentuk opsi)
        var editgambar=document.getElementById(`editgambar${bebas}`).value // //menampung hasil gambar kegiatan baru yang diketik user (link gambar)
        // console.log(newtodo,newhari,newimg)
        if(editproduk){ // /kondisi jika terdapat kegiatan baru
            listdata[bebas].produk=editproduk // //menambah kegiatan baru tersebut ke dalam array
        }
        if(editharga){
            listdata[bebas].harga=parseInt(editharga) // //menambah hari baru tersebut ke dalam array
        }
        if(editgambar){
            listdata[bebas].gambar=editgambar // //menambah gambar baru tersebut ke dalam array
        }
        indexedit=-1
        Printadmin(listdata) // //mencetak kembali list data setelah perubahan yang dilakukan
    }
    const addproduk=()=>{
        var input=document.getElementsByClassName('addproduk')
        var newproduk=input[0].value
        var newharga=parseInt(input[1].value)
        var newgambar=input[2].value
        listdata.push(new List(newproduk,newharga,newgambar))
        Printadmin(listdata)
    }
    const searchproduk=()=>{
        var input=document.getElementsByClassName("searchproduk")
        var produksearch=input[0].value
        var arrsearch=listdata.filter((val)=>val.produk.toLowerCase().startsWith(produksearch.toLowerCase()))
        Printadmin(arrsearch)
    }
    const back=()=>{
        Printadmin(listdata)
    }