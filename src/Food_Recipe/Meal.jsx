import React, { useEffect, useState } from "react";
import "./meal.css";
const CLIENT_ID = "7b908eb5620c4876aa2c284699bccd48";
const CLIENT_SECRET = "09ed6697de884486a54ca759013c5141";

const Song = () => {
  const [songData, setSongData] = useState([]);
  const [singer, setSinger] = useState("adele");
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const getSpotifyToken = async () => {
      const authParameters = {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      };
      const tokenResponse = await fetch("https://accounts.spotify.com/api/token", authParameters);
      const tokenData = await tokenResponse.json();
      setAccessToken(tokenData.access_token);
    };
    getSpotifyToken();
  }, []);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      if (!accessToken) return;
      setLoading(true);
      setSongData([]);
      const api = await fetch(
        `https://api.spotify.com/v1/search?q=${singer}&type=track&limit=20`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const data = await api.json();
      console.log(data.tracks.items);
      setSongData(data.tracks.items);
      setLoading(false);
    };
    fetchDataFromAPI();
  }, [singer, accessToken]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const api = await fetch(
      `https://api.spotify.com/v1/search?q=${inputData}&type=track&limit=20`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    const data = await api.json();
    console.log("search data=", data.tracks.items);
    setSongData(data.tracks.items);
    setInputData("");
    setLoading(false);
  };

  return (
    <>
      <div className="mx-auto text-center">
        <button onClick={() => setSinger("Adele")} className="btn btn-outline-primary mx-3">Adele</button>
        <button onClick={() => setSinger("Eminem")} className="btn btn-outline-warning mx-3">Eminem</button>
        <button onClick={() => setSinger("Drake")} className="btn btn-outline-light mx-3">Drake</button>
        <button onClick={() => setSinger("Rihanna")} className="btn btn-outline-info mx-3">Rihanna</button>
        <button onClick={() => setSinger("Coldplay")} className="btn btn-outline-warning mx-3">Coldplay</button>
        <button onClick={() => setSinger("Ed Sheeran")} className="btn btn-outline-info mx-3">Ed Sheeran</button>
      </div>

      <form onSubmit={submitHandler} className="mx-auto text-center my-3">
        <input
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          placeholder="Enter the song name..."
        />
      </form>

      {loading && <p className="text-center my-3">🔄 Loading...Please Wait</p>}

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        {songData.map((data) => (
          <div key={data.id} style={{ textAlign: "center" }} className="image-container">
            <div>
              <img
                src={data.album.images[0].url}
                alt=""
                style={{ width: "150px", borderRadius: "10px", border: "2px solid blue" }}
              />
            </div>
            <h5  className="song-title">{data.name}</h5>
            <p className="artist-name">{data.artists[0].name}</p>
            <a href={data.external_urls.spotify} target="_blank" rel="noopener noreferrer">🎵 Listen Here</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Song;
