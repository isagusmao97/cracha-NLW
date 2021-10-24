const LinksSocialMedia = {

    github: "isagusmao97",
    instagram: "isagusmao97",
    twitter: "isagusmao97",
    linkedin: "/in/isabela-gusmão-rocha-288526216"

  }

  function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
       const social = li.getAttribute('class')
       
       li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`           
       

    }
  }
    changeSocialMediaLinks()

    function getGithubProfileInfos(){
        const url = `https://api.github.com/users/${LinksSocialMedia.github}`
        fetch (url).then(response => response.json())
        .then(data => {
            userBio.textContent = data.bio
        })

    }
    getGithubProfileInfos()