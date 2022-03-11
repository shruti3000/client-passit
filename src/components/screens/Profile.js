import React from "react";
const Profile = () => {
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom: "1px solid grey "
            }}>
                <div >
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                        src="https://media.istockphoto.com/photos/3d-character-of-pretty-girl-with-hand-pointing-to-empty-space-picture-id1338834263?b=1&k=20&m=1338834263&s=170667a&w=0&h=8gkYAktFrZ5EoDvdVtq_0vwG_uSHErcXSIceBlNJM1E="
                    />
                </div>
                <div>
                    <h4>shruti bansal</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>



            <div className="gallary">
                <img className="item" src="https://media.istockphoto.com/photos/3d-character-of-pretty-girl-with-hand-pointing-to-empty-space-picture-id1338834263?b=1&k=20&m=1338834263&s=170667a&w=0&h=8gkYAktFrZ5EoDvdVtq_0vwG_uSHErcXSIceBlNJM1E=" />
                <img className="item" src="https://media.istockphoto.com/photos/3d-character-of-pretty-girl-with-hand-pointing-to-empty-space-picture-id1338834263?b=1&k=20&m=1338834263&s=170667a&w=0&h=8gkYAktFrZ5EoDvdVtq_0vwG_uSHErcXSIceBlNJM1E=" />
                <img className="item" src="https://media.istockphoto.com/photos/3d-character-of-pretty-girl-with-hand-pointing-to-empty-space-picture-id1338834263?b=1&k=20&m=1338834263&s=170667a&w=0&h=8gkYAktFrZ5EoDvdVtq_0vwG_uSHErcXSIceBlNJM1E=" />
                <img className="item" src="https://media.istockphoto.com/photos/3d-character-of-pretty-girl-with-hand-pointing-to-empty-space-picture-id1338834263?b=1&k=20&m=1338834263&s=170667a&w=0&h=8gkYAktFrZ5EoDvdVtq_0vwG_uSHErcXSIceBlNJM1E=" />
                <img className="item" src="https://media.istockphoto.com/photos/3d-character-of-pretty-girl-with-hand-pointing-to-empty-space-picture-id1338834263?b=1&k=20&m=1338834263&s=170667a&w=0&h=8gkYAktFrZ5EoDvdVtq_0vwG_uSHErcXSIceBlNJM1E=" />
                <img className="item" src="https://media.istockphoto.com/photos/3d-character-of-pretty-girl-with-hand-pointing-to-empty-space-picture-id1338834263?b=1&k=20&m=1338834263&s=170667a&w=0&h=8gkYAktFrZ5EoDvdVtq_0vwG_uSHErcXSIceBlNJM1E=" />

            </div>
        </div>
    )
}
export default Profile