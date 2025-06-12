import React from "react";
import { FiDownload, FiFolder, FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const WorkCard = ({ w, tabId }) => {
	// Handle undefined w
	if (!w) {
		console.error("WorkCard received undefined data:", { tabId, w });
		return <p className="no-data">No data available</p>;
	}

	// Ensure w.tech is an array before mapping
	const techStack = Array.isArray(w.tech) ? w.tech : [];

	return (
		<div>
			{tabId === "react-native" ? (
				<a
					href={w.app}
					download={w.title || "Download"}
					target="_blank"
					rel="noopener noreferrer"
					className="work-link-group"
				>
					<div className="works-card">
						<div className="works-container">
							<div className="top-work">
								<FiFolder className="work-folder" />
								<div className="right">
									{w.gitlink && (
										<a className="work-git" href={w.gitlink} target="_blank" rel="noopener noreferrer">
											<FiGithub />
										</a>
									)}
									<a
										href={w.app}
										download={w.title || "Download"}
										target="_blank"
										rel="noopener noreferrer"
										className="work-link"
									>
										<FiDownload />
									</a>
								</div>
							</div>
							<div className="mid-work">
								<p className="work-title">{w.title || "Untitled Project"}</p>
								<p className="work-desc">{w.desc || "No description available"}</p>
							</div>
							<div className="bottom-work">
								{techStack.length > 0 ? (
									techStack.map((e, index) => <small key={index}>{e}</small>)
								) : (
									<small>No technologies listed</small>
								)}
							</div>
						</div>
					</div>
				</a>
			) : (
				<a href={w.site || "#"} target="_blank" rel="noopener noreferrer" className="work-link-group">
					<div className="works-card">
						<div className="works-container">
							<div className="top-work">
								<FiFolder className="work-folder" />
								<div className="right">
									{w.gitlink && (
										<a className="work-git" href={w.gitlink} target="_blank" rel="noopener noreferrer">
											<FiGithub />
										</a>
									)}
									<a className="work-link" href={w.site || "#"} target="_blank" rel="noopener noreferrer">
										<IoOpenOutline />
									</a>
								</div>
							</div>
							<div className="mid-work">
								<p className="work-title">{w.title || "Untitled Project"}</p>
								<p className="work-desc">{w.desc || "No description available"}</p>
							</div>
							<div className="bottom-work">
								{techStack.length > 0 ? (
									techStack.map((e, index) => <small key={index}>{e}</small>)
								) : (
									<small></small>
								)}
							</div>
						</div>
					</div>
				</a>
			)}
		</div>
	);
};

export default WorkCard;
