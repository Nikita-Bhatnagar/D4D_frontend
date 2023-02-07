import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfiles } from "../actions/userActions";
import UserCard from "../component/UserCard";
import Spinner from "../component/Spinner";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LayersIcon from "@mui/icons-material/Layers";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import useMediaQuery from "@mui/material/useMediaQuery";

const SearchProfilePage = (props) => {
  const [tech, setTech] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const technologies = [
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Angular.js",
    "Vue.js",
    "Express.js",
    "Node.js",
    "Next.js",
    "Nest.js",
    "Bootstrap",
    "Material UI",
    "Mongo DB",
    "Ansible",
    "Android",
    ".NET CORE",
    "Alpine.js",
    "Apache Hadoop",
    "Apex",
    "AWS",
    "ASP.NET",
    "Bulma",
    "BackboneJS",
    "C",
    "C++",
    "C#",
    "Java",
    "Python",
    "Cassandra",
    "Django",
    "Docker",
    "CodeIgniter",
    "Cycle.js",
    "Electron",
    "Ember.js",
    "Elixir",
    "Flask",
    "Firebase",
    "Ember",
    "DynamoDB",
    "Flutter",
    "Gatsby Js",
    "GIT",
    "Github",
    "Golang",
    "GraphQL",
    "Hibernate",
    "ionic",
    "Jenkins",
    "jQuery",
    "Kotlin",
    "Kubernetes",
    "Laravel",
    "Machine Learning",
    "MariaDB",
    "Material",
    "Materialize",
    "MySQL",
    "Perl",
    "PHP",
    "PostgreSQL",
    "R",
    "React Native",
    "Redux",
    "Ruby",
    "Ruby on Rails",
    "Rust",
    "Salesforce Developer",
    "Scala",
    "SQL",
    "Spring",
    "Svelte",
    "Swift",
    "Tailwind CSS",
    "Typescript",
    "Unity",
    "Unreal",
    "Web3",
    "Zustand",
  ];

  const matches = useMediaQuery("(min-width:600px)");

  const { loading, error, profiles } = useSelector(
    (state) => state.searchProfiles
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles(tech, title, name));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(getProfiles(tech, title, name));
  };

  const defaultPropsTech = {
    options: technologies,
    getOptionLabel: (option) => option,
  };

  return (
    <Container sx={{ marginTop: "35px" }}>
      <Typography variant="h3" align="center" component="h1">
        Explore the best of talent...
      </Typography>
      <Typography
        paragraph
        align="center"
        sx={{
          fontSize: "20px",
          margin: "30px auto 50px auto",
          maxWidth: "80%",
        }}
      >
        “Hard work beats talent when talent fails to work hard.” ― Kevin Durant
      </Typography>
      <form
        style={{
          boxShadow: "0px 0px 4px #ddd",
          padding: "20px 0px 20px 0",
          //marginLeft: "30px",
        }}
        onSubmit={submitHandler}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ padding: matches ? "0 10px 0 20px" : "0 10px 6px 10px" }}
          >
            <Autocomplete
              {...defaultPropsTech}
              id="tech"
              value={tech}
              onChange={(event, newValue) => {
                setTech(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Technologies" />
              )}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ padding: matches ? "0 10px 0 10px" : "6px 10px 6px 10px" }}
          >
            <TextField
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ padding: matches ? "0 20px 0 10px" : "6px 10px 0 10px" }}
          >
            <TextField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container>
          <Button
            type="submit"
            variant="contained"
            className="searchBtn"
            sx={{
              width: "320px",
              margin: "20px auto 0 auto",
              padding: "10px",
              fontSize: "16px",
              backgroundColor: "#4bacab",
            }}
          >
            <SearchIcon /> Search
          </Button>
        </Grid>
      </form>
      <Grid
        container
        sx={{
          margin: "20px",
          marginLeft: "0",
          alignItems: "center",
          minHeight: "40vh",
          justifyContent: "center",
        }}
      >
        {loading && <Spinner />}
        {!loading &&
          !error &&
          profiles.map((elem) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                xl={3}
                sx={{ padding: "15px" }}
                key={elem._id}
              >
                <UserCard data={elem} />
              </Grid>
            );
          })}
        {!loading && !error && profiles.length === 0 && (
          <Typography
            p
            sx={{
              margin: "initial auto",
              fontSize: "20px",
            }}
          >
            No developers found!
          </Typography>
        )}
        {!loading && error && (
          <Typography
            p
            sx={{
              margin: "initial auto",
              fontSize: "20px",
            }}
          >
            Something went wrong. Try again.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};
export default SearchProfilePage;
