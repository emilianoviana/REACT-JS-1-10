import Listsiswa from "./Listsiswa";

function Siswa() {

    const nama = ['emily','emil','cemil']

    return (
        <div className="App">
            <Listsiswa judul={nama}/>
        </div>
    );
}

export default Siswa;