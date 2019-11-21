import React, {Component} from 'react';

class MemeGenerator extends Component {
	constructor(){
		super()
		this.state={
			topText: "",
			bottomText: "",
			randomImg: "http://i.imgflip.com/1bij.jpg",
			allMemeImgs: []
		}
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleChange(event){
		const {name, value} = event.target
		this.setState({
			[name]:value
		})
	}

	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
			.then(response=> response.json())
			.then(response=> {
				const {memes} = response.data
				console.log(memes[0])
				this.setState({ allMemeImgs: memes})
			})
		}

	handleSubmit(event){
		event.preventDefault();
		// get random number
		const randNum = Math.floor(Math.random()*this.state.allMemeImgs.length);
		console.log(randNum);

		// get meme from that index number
		const randMemeImg = this.state.allMemeImgs[randNum].url
		console.log(randMemeImg)


		// set 'randomImg' to the '.url' of the random image grabbed

		this.setState({
			randomImg: randMemeImg
		})
	}
	
	render(){
		return(
			<div className="container mt-3">
				<div className="row">
					<div className="col-4">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label htmlFor="topText">Top Text</label>
								<input
									name="topText" 
									type="text" 
									className="form-control" 
									id="topText" 
									value={this.state.topText} 
									onChange={this.handleChange}/>
							</div>
							<div className="form-group">
								<label htmlFor="bottomText">Bottom Text</label>
								<input
									name="bottomText" 
									type="text" 
									className="form-control" 
									id="bottomText" 
									value={this.state.bottomText} 
									onChange={this.handleChange}/>
							</div>
							<button className='btn btn-primary'>Generate</button>
						</form>
					</div>
					<div className="col-8 meme">
						<img src={this.state.randomImg} alt=""/>
						<h2 className="top">{this.state.topText}</h2>
						<h2 className="bottom">{this.state.bottomText}</h2>
					</div>
				</div>
			</div>
		)
	}
}

export default MemeGenerator