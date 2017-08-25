import {Project} from './project';

/* tslint:disable:max-line-length */
export const PROJECTS: Project[] = [
    new Project('WireOne: Wire Funds Transfer Request Form'
                    , 'Worked with a team on a year long project to automate our Wire Funds form entry which would touch multiple deparments. I worked on responsive design, form capturing, after hour request processing, and backend queue processing.'
                    , '/assets/images/projects/wireOne.preview.png'
                    , ['C#', 'MVC', 'MS SQL', 'SignalR', 'Bootstrap']
    )
    , new Project('Hann Financial Website'
                    , 'Site allows customers to securely view their loans and leases, make schedualed payments on their accounts, enroll in auto-pay, change contact information, and request payoff quotes. It also allows dealers to quote rates, submit loan applications, and request payoff quotes.'
                    , '/assets/images/projects/hann.preview.png'
                    , ['VB.NET', 'Webforms', 'ASP Membership', 'MS SQL', 'TELERIK Web Controls', 'Aspose', 'SSIS packages']
            )
    , new Project('Valley Forge Asset Managment, LLC Website'
                    , 'Created a simple customer facing brochuire site for Valley forge Asset Manangment. Site was responsive with a database driven customer list.'
                    , '/assets/images/projects/vfam.preview.png'
                    , ['C#', 'MVC', 'Entity Framework', 'Zurb Foundation']
            )
    , new Project('Resource Rentals and Sales Website'
                    , 'Build a template for a modx revolution site based off a provided style. The site used a responsive design pattern, cart for requesting rentals, contact form, and search capabilities. '
                    , '/assets/images/projects/resourceRentals.preview.png'
                    , ['Bootstrap', 'Modx Revolution', 'PHP']
            )
];
/* tslint:enable:max-line-length */
