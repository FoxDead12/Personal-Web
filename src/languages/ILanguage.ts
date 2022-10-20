export interface ILanguage {

    code: string,
    header: {

        about: string,
        formation: string,
        experience: string,
        contact: string
    },
    hero: {

        upText: string,
        bottomText: string
    },
    about: {

        section: string,
        me: string,
        descriptionHey: string,
        description: string
    },
    formation: {

        section: string,
    },
    experiences: {

        section: string,
    },
    footer: {

        section: string,
        myEmail: string,
        form: {
            title: string,
            successMessage: string,
            errorMessage: string,
            name: string,
            email: string,
            message: string,
            button: string,
            privacyPoliticText: string,
            privacyPoliticWord: string,
        }
    },
    privacyPolity: {
        title: string,
        row1: string,
        row2: string,
        row3: string,
        row4: string,
        row5: string
    }
    
}