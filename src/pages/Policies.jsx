import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Policies.module.css";

/*
 * Policy content is transcribed from the supplied VGIL Policies PDF.
 * Placeholder text such as [Business Name], [insert relevant job title here],
 * <Firm Name>, etc. is intentionally preserved.
 */

const policyData = [
    {
        "id": "ah1",
        "code": "AH1",
        "title": "Customer Grievance Redressal Policy",
        "pages": [
            {
                "page": 1,
                "blocks": [
                    {
                        "type": "text",
                        "value": "Virtual Galaxy Infotech Limited (herein after referred as “our” or “we” or “VGIL”), as a Payment Aggregator concentrates on resolving customer grievances suitably and efficiently and assigns customer grievance at its top most priority. This policy is implemented with an intention to resolve the grievances and at the same time to minimize instances of customer complaints through proper review mechanism along with prompt redressal of various types of customer complaints.\nThe customers can reach us in multiple ways and each customer complaint shall be acknowledged by issue of specific reference number for proper tracking and resolution. Each such complaint shall be closed only after satisfactory resolution and confirmation from the Complainant. Unresolved complaints shall be escalated through the System for immediate attention and resolution. The Company’s Customer Grievance Redressal Policy has been designed and implemented with the sole intention that:\n• As a Service Organisation, Customers are the life-line of our Business and shall always beattended patiently and on priority\n• The website of the Company shall always display the modes through which the customers can register their complaints/ grievances with the Company along with details of Email ID, contact number, etc.\n• All the employees deputed for services in the Customer Grievance Redressal are well informed and trained to handle customer grievances and are aware that the Customers may feel dejected for on some wrong happening with them and may over react while registering their Complaint. Well informed and trained staff of the Company are in a better position to identify the root cause of the issues being faced by the Customers and shall address them positively by comforting the customers and registering their Complaints.\n• All registered complaint/ grievance shall be promptly dealt by the Company and the Customers shall always be treated compassionately until satisfactory resolution of their grievances. If the grievance/ complaint remains resolved, the Customer shall be provided with additional opportunity to escalate the issue.\nThe following process flow shall be followed by the Company for proper and timely redressal of Customers Grievances:\na) The Customer can lodge a complaint in the following three ways: - A customer can contact our Support Team : +91 7798880959, 7798880906 during working hours and register their complaints. | By writing an email to Merchant.suppport@vginfotech.ai. | By visiting the company’s Website through Contact us and lodging your complaint.\n"
                    }
                ]
            },
            {
                "page": 2,
                "blocks": [
                    {
                        "type": "text",
                        "value": "b) Once a complaint/ grievance is registered with the Company through any of the modes by the Customer, a unique complaint/ grievance registration number shall be allotted for the same for ease of tracking and future references.\nc) If the grievance is received through an email or our website, such complaints shall be acknowledged by an immediate system generated response or via individual emails to the extent possible.\nd) Any grievance received through any of the above modes will be routed to our dedicated customer complaint service desk who will immediately record your feedback/grievance.\ne) The follow-up action taken in respect of such complaints shall be advised to customers by e-mail. The Customer Service Representative (CSR) will also attempt to contact the customer if additional information is required for effective resolution.\nf) If the complaint remains unresolved within the given time or if the customer is not satisfied with the resolution provided, he/ she can refer to the escalation matrix mentioned in the policy and escalate the issue to the higher authority.\n**Customer Grievance Escalation Matrix**\nThe escalation matrix to handle our customer grievances effectively and efficiently, where a customer has not received a response within the specified time frame or if the customer is dissatisfied with the response received at the first level, the customer can escalate the complaint to the next level as indicated below. Highest priority is given to escalation cases for fater resolution.\n**Level 2**\nCustomer can address the grievance to the below address or an email for escalations:-\nName of the officer: Customer Service Head\nEmail ID: cs.head@vginfotech.ai\nOffice Address: Virtual Galaxy Infotech Limited 3, Central Excise Colony, Chhatrapati Square, Ring Road, Nagpur – 440015, Maharashtra (INDIA)\n**Level 3**\nCustomer can address the grievance to the below address or an email for escalations:-\nName of the officer: Nodal Officer \nEmail ID: rbi.nodalofficer@vginfotech.ai \nOffice Address: Virtual Galaxy Infotech Limited 3, Central Excise Colony, Chhatrapati Square, Ring Road, Nagpur – 440015, Maharashtra (INDIA)\n Upon receiving the complaint, we will acknowledge within 3 business days. Further response to the escalated issue will be sent within 7 business days post acknowledgement."
                    }
                ]
            }
        ]
    },
    {
        "id": "ah2",
        "code": "AH2",
        "title": "Cyber Security Policy",
        "pages": [
            {
                "page": 3,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH2: Cyber Security Policy\nThe Cyber Security Policy should be distinct from the IT/IS policy of the UCB so that it highlights\nthe risks from cyber threats and the measures to address/reduce these risks. While identifying\nand assessing the inherent risks, UCBs should keep in view.\n• The technologies adopted - Security incident event management (SIEM), Privilege\nIdentity Management (PIM), Database activity monitoring\n• Delivery channels - Delivery channels: ATM, PoS, IMPS, etc\n• Digital products being offered - Digital products: m-Banking, UPI, e-Wallet, etc\n• Internal and external threats etc… - Internal threats: Critical & sensitive data\ncompromise, password theft, internal source code review, etc.\n• Rate each of these risks as Low, Medium, High and Very High - External threat: DDoS,\nRansomware, etc\nIT Architecture/Framework should be security compliant\nThe IT architecture/ framework which includes network, server, database and application, end\nuser systems, etc., should take care of security measures at all times and this should be\nreviewed by the Board or IT Sub-committee of the Board periodically. For this purpose, UCBs\nmay carry out the following steps:\nNetwork\n• Identify weak/vulnerable areas in IT systems and processes by schedule VAPT test.\n• Cyber crises Management plan. Plan to be execute after attack happened\n• Cyber Security awareness to Board/Management/Employee"
                    }
                ]
            },
            {
                "page": 4,
                "blocks": [
                    {
                        "type": "text",
                        "value": "• Do encourage communication within your organization when something happens or\nseems suspicious.\n• Do testing and auditing of logs and security system so that you make sure people’s\nawareness is high\n• Apply updated firewall and Allow / restricted access to networks. Proper firewall should\nbe deployed and all the traffic in/out should be filtered, Public IP access should be on\nwhite list basis. Internet access to office should be restricted from firewall. Intrusion\nPrevention System Should be active.\n• USB Flash Drive, Careful on what you plug into your computer. Ever use a USB whose\nsource you don’t know! It can be infected with malware that can even resist formatting\n• You still need antivirus (yes, really), Get protection for your connection! Do a bit of\nresearch and choose an antivirus you trust. Antivirus is still very necessary, so don’t skip\nit\n• Emails, emails are the big gateway for cyber criminals, never access .zip attachments in\ne-mails from unknown senders, don’t click links in e-mails from unknown senders\n• Do you https? Added “s” is key here. A website starting with https encrypts the data you\nput in the website and the data you get from it, so that no one can eavesdrop or tamper\nwith the data flow\n• Use private network such as MPLS, other leased lines, VPN, with proper encryption for\ncommunication of branches to DC. Inter office network by using IPv6\n• Router configuration should be backup and reviewed timely\n• Restrict unauthorized user, Login banner should be active on all network devices\nServer\n• Allow restricted access to applications wherever permitted, through well-defined\nprocesses and approvals including rationale for permitting such access\n• Assess the cost of impact in case of breaches/failures in these areas\n• Separate server for Bank application servers which are not having internet, and separate\nserver for internet\n• Internal server to server accessibility and permissions (LAN)\n• Domain creation – set properties to domain regarding password policy, change\nfrequency"
                    }
                ]
            },
            {
                "page": 5,
                "blocks": [
                    {
                        "type": "text",
                        "value": "• Creation of VMware\nDatabase\n• Allow /restricted access to databases\n• Creation individual user\n• Database access log\n• Database password encryption\n• Archive log, audit mode\n• DR site\n• Backup\n• Backup restoration and testing\n• DR drill activity\n• Allow /restrict access of external devices\nApplication\n• Allow restricted access to applications wherever role wise access permitted\n• Required software installation on Application server\n• Encryption of database link, configuration files, user name passwords\n• User name password change frequency\n• Allow /restrict access of external devices\nEnd User Systems\n• Allow restricted access to applications wherever permitted, through well-defined\nprocesses and approvals including rationale for permitting such access\nCyber Security Policy Systems review\n• Cyber Security Policy should be review every year\n• Documentation, training and awareness program related Bank staff\n• Roles and responsibilities\n• Put in place suitable Cyber Security System to address them,"
                    }
                ]
            },
            {
                "page": 6,
                "blocks": [
                    {
                        "type": "text",
                        "value": "• Specify and document clearly the responsibility for each of above steps.\nBasic Cyber Security Controls for Primary (Urban) Cooperative Banks (UCBs)\n1) Inventory Management of Business IT Assets\n1.1 UCBs should maintain an up-to-date business IT Asset Inventory Register containing the\nfollowing fields, as a minimum: Details of the IT Asset (viz., hardware/software/network\ndevices, key personnel, services, etc.)Details of systems where customer data are stored\nAssociated business applications, if any Criticality of the IT asset (For example,\nHigh/Medium/Low)\n2) Preventing access of unauthorized software\n3) Environmental Controls\n4) Network Management and Security\n5) Secure Configuration\n6) Anti-virus and Patch Management\n7) User Access Control / Management\n8) Secure mail and messaging systems\n9) Removable Media\n10) User/Employee/Management Awareness\n11) Customer Education and Awareness\n13) Vendor/Outsourcing Risk Management\nDescription of some of the cyber security threats\n• Denial of service attack:\n• Distributed denial of service:\n• Ransom ware:\n• Malware:\n• Phishing:\n• Pear phishing:\n• Whaling:\n• Vishing:\n• Drive-by downloads:\n• Browser Gateway frauds:"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah3",
        "code": "AH3",
        "title": "Information Technology Policy and Procedure Manual",
        "pages": [
            {
                "page": 7,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH3: Information Technology Policy and Procedure Manual\nIntroduction\nThe [Business Name] IT Policy and Procedure Manual provides the policies and procedures for\nselection and use of IT within the business which must be followed by all staff. It also provides\nguidelines [Business name] will use to administer these policies, with the correct procedure to\nfollow. [Business Name] will keep all IT policies current and relevant. Therefore, from time to\ntime it will be necessary to modify and amend some sections of the policies and procedures, or\nto add new procedures. Any suggestions, recommendations or feedback on the policies and\nprocedures specified in this manual are welcome. These policies and procedures apply to all\nemployees.\nTechnology Hardware Purchasing Policy\nPolicy Number: [insert unique number]\nPolicy Date: [insert date of policy]\nGuidance: This policy should be read and carried out by all staff. Edit this policy so it suits the\nneeds of your business.\nComputer hardware refers to the physical parts of a computer and related devices. Internal\nhardware devices include motherboards, hard drives, and RAM. External hardware devices\ninclude monitors, keyboards, mice, printers, and scanners.\nPurpose of the Policy\nThis policy provides guidelines for the purchase of hardware for the business to ensure that all\nhardware technology for the business is appropriate, value for money and where applicable\nintegrates with other technology for the business. The objective of this policy is to ensure that\nthere is minimum diversity of hardware within the business Procedures\nPurchase of Hardware\nGuidance: The purchase of all desktops, servers, portable computers, computer peripherals and\nmobile devices must adhere to this policy. Edit this statement to cover the relevant technology\nfor your business.\nPurchasing desktop computer systems\nGuidance: For assistance with Choosing hardware and software, including desktop computers,\nthe Business Victoria’s Choosing hardware and software page on the Business Victoria website."
                    }
                ]
            }
        ]
    },
    {
        "id": "ah4",
        "code": "AH4",
        "title": "Policy for Getting Software",
        "pages": [
            {
                "page": 8,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH4: Policy for Getting Software\nPolicy for Getting Software\nPolicy Number: [insert unique number]Policy Date: [insert date of policy]Guidance: This policy\nshould be read and carried out by all staff. Edit this policy so it suits the needs of your business.\nPurpose of the Policy\nThis policy provides guidelines for the purchase of software for the business to ensure that all\nsoftware used by the business is appropriate, value for money and where applicable integrates\nwith other technology for the business. This policy applies to software obtained as part of\nhardware bundle or pre-loaded software.\nProcedures\nRequest for Software\nAll software, including [insert relevant other types of non-commercial software such as open\nsource, freeware, etc. here] must be approved by [insert relevant job title here] prior to the use\nor download of such software.\nPurchase of software\nThe purchase of all software must adhere to this policy. All purchased software must be\npurchased by [insert relevant job title here] All purchased software must be purchased from\n[insert relevant suppliers names or the words ‘reputable software sellers’ here] All purchases of\nsoftware must be supported by[insert guarantee and/or warranty requirements here] and be\ncompatible with the business’s server and/or hardware system.Any changes from the above\nrequirements must be authorised by [insert relevant job title here]All purchases for software\nmust be in line with the purchasing policy in the Financial policies and procedures manual."
                    }
                ]
            }
        ]
    },
    {
        "id": "ah5",
        "code": "AH5",
        "title": "Policy for Use of Software",
        "pages": [
            {
                "page": 9,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH5: Policy for Use of Software\nPolicy for Use of Software\nPolicy Number: [insert unique number]Policy Date: [insert date of policy]Guidance: This policy\nshould be read and carried out by all staff. Edit this policy so it suits the needs of your business.\nPurpose of the Policy\nThis policy provides guidelines for the use of software for all employees within the business to\nensure that all software use is appropriate. Under this policy, the use of all open source and\nfreeware software will be conducted under the same procedures outlined for commercial\nsoftware.\nProcedures\nSoftware Licensing\nAll computer software copyrights and terms of all software licences will be followed by all\nemployees of the business. Where licensing states limited usage (i.e. the number of computers\nor users etc.), then it is the responsibility of [insert relevant job title here] to ensure these terms\nare followed. [insert relevant job title here] is responsible for completing a software audit of all\nhardware twice a year to ensure that software copyrights and license agreements are adhered\nto.\nSoftware Installation\nAll software must be appropriately registered with the supplier where this is a requirement.\n[Business Name] is to be the registered owner of all software. Only software obtained in\naccordance with the getting software policy is to be installed on the business’s computers. All"
                    }
                ]
            },
            {
                "page": 10,
                "blocks": [
                    {
                        "type": "text",
                        "value": "software installation is to be carried out by [insert relevant job title here] A software upgrade\nshall not be installed on a computer that does not already have a copy of the original version of\nthe software loaded on it.\nSoftware Usage\nOnly software purchased in accordance with the getting software policy is to be used within the\nbusiness. Prior to the use of any software, the employee must receive instructions on any\nlicensing agreements relating to the software, including any restrictions on the use of the\nsoftware. All employees must receive training for all new software. This includes new\nemployees to be trained to use existing software appropriately. This will be the responsibility of\n[insert relevant job title here] Employees are prohibited from bringing software from home and\nloading it onto the business’s computer hardware. Unless express approval from [insert relevant\njob title here] is obtained, the software cannot be taken home and loaded on a employees’\nhome computer Where an employee is required to use the software at home, an evaluation of\nproviding the employee with a portable computer should be undertaken in the first instance.\nWhere it is found that software can be used on the employee’s home computer, authorization\nfrom [insert relevant job title here] is required to purchase separate software if licensing or\ncopyright restrictions apply. Where software is purchased in this circumstance, it remains the\nproperty of the business and must be recorded on the software register by [insert relevant job\ntitle here] Unauthorized software is prohibited from being used in the business. This includes\nthe use of software owned by an employee and used within the business. The unauthorized\nduplicating, acquiring or use of software copies is prohibited. Any employee who makes,\nacquires, or uses unauthorized copies of the software will be referred to [insert relevant job title\nhere] for [insert consequence here, such as further consultation, reprimand action, etc.]. The\nillegal duplication of software or other copyrighted works is not condoned within this business\nand [insert relevant job title here] is authorized to undertake disciplinary action where such an\nevent occurs.\nBreach of Policy\nWhere there is a breach of this policy by an employee, that employee will be referred to [insert\nrelevant job title here] for [insert consequence here, such as further consultation, reprimand\naction, etc.] Where an employee is aware of a breach of the use of software in accordance with\nthis policy, they are obliged to notify [insert relevant job title here] immediately. In the event\nthat the breach is not reported and it is determined that an employee failed to report the\nbreach, then that employee will be referred to [insert relevant job title here] for [insert\nconsequence here, such as further consultation, reprimand action, etc.]\nAdditional Policies for Use of Software"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah6",
        "code": "AH6",
        "title": "Bring Your Own Device Policy",
        "pages": [
            {
                "page": 11,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH6: Bring Your Own Device Policy\nPolicy Number: [insert unique number]\nPolicy Date: [insert date of policy]\nGuidance: Edit this policy so it suits the needs of your business.]\nAt [Business Name] we acknowledge the importance of mobile technologies in improving\nbusiness communication and productivity. In addition to the increased use of mobile devices,\nstaff members have requested the option of connecting their own mobile devices to [Business\nName]'s network and equipment. We encourage you to read this document in full and to act\nupon the recommendations. This policy should be read and carried out by all staff.\nPurpose of the Policy\nThis policy provides guidelines for the use of personally owned notebooks, smart phones,\ntablets and [insert other types of mobile devices] for business purposes. All staff who use or\naccess [Business Name]'s technology equipment and/or services are bound by the conditions of\nthis Policy.\nProcedures\nCurrent mobile devices approved for business use\nThe following personally owned mobile devices are approved to be used for business purposes:\n• [insert type of approved mobile devices such as notebooks, smart phones, tablets,\niPhone, removable media etc.]\n• [insert type of approved mobile devices such as notebooks, smart phones, tablets,\niPhone, removable media etc.]\n• [insert type of approved mobile devices such as smart phones, tablets, iPhone etc.]\n• [insert type of approved mobile devices such as notebooks, smart phones, tablets,\niPhone, removable media etc.].\nRegistration of personal mobile devices for business use\nGuidance: You will need to consider if the business is to have any control over the applications\nthat are used for business purposes and/or used on the personal devices.Employees when using\npersonal devices for business use will register the device with [insert relevant job title or\ndepartment here]. [insert relevant job title or department here] will record the device and all"
                    }
                ]
            },
            {
                "page": 12,
                "blocks": [
                    {
                        "type": "text",
                        "value": "applications used by the device.Personal mobile devices can only be used for the following\nbusiness purposes:\n• [insert each type of approved use such as email access, business internet access,\nbusiness telephone calls etc.]\n• [insert each type of approved use such as email access, business internet access,\nbusiness telephone calls etc.]\n• [insert each type of approved use such as email access, business internet access,\nbusiness telephone calls etc.].\nEach employee who utilises personal mobile devices agrees:\n• Not to download or transfer business or personal sensitive information to the device.\nSensitive information includes [insert types of business or personal information that you\nconsider sensitive to the business, for example intellectual property, other employee\ndetails etc.]\n• Not to use the registered mobile device as the sole repository for [Business Name]'s\ninformation. All business information stored on mobile devices should be backed up\n• To make every reasonable effort to ensure that [Business Name]'s information is not\ncompromised through the use of mobile equipment in a public place. Screens displaying\nsensitive or critical information should not be seen by unauthorised persons and all\nregistered devices should be password protected\n• To maintain the device with [insert maintenance requirements of mobile devices such as\ncurrent operating software, current security software etc.]\n• Not to share the device with other individuals to protect the business data access\nthrough the device\n• To abide by [Business Name]'s internet policy for appropriate use and access of internet\nsites etc.\n• To notify [Business Name] immediately in the event of loss or theft of the registered\ndevice\n• Not to connect USB memory sticks from an untrusted or unknown source to [Business\nName]'s equipment.\nAll employees who have a registered personal mobile device for business use acknowledge that\nthe business:"
                    }
                ]
            },
            {
                "page": 13,
                "blocks": [
                    {
                        "type": "text",
                        "value": "• Owns all intellectual property created on the device\n• Can access all data held on the device, including personal data\n• Will regularly back-up data held on the device\n• Will delete all data held on the device in the event of loss or theft of the device\n• Has first right to buy the device where the employee wants to sell the device\n• Will delete all data held on the device upon termination of the employee. The\nterminated employee can request personal data be reinstated from back up data\n• Has the right to deregister the device for business use at any time.\nKeeping mobile devices secure\nThe following must be observed when handling mobile computing devices (such as notebooks\nand iPads):\n• Mobile computer devices must never be left unattended in a public place, or in an\nunlocked house, or in a motor vehicle, even if it is locked. Wherever possible they should\nbe kept on the person or securely locked away\n• Cable locking devices should also be considered for use with laptop computers in public\nplaces, e.g. in a seminar or conference, even when the laptop is attended\n• Mobile devices should be carried as hand luggage when travelling by aircraft.\nExemptions\nThis policy is mandatory unless [insert relevant job title or department here] grants an\nexemption. Any requests for exemptions from any of these directives, should be referred to the\n[insert relevant job title or department here].\nBreach of this policy\nAny breach of this policy will be referred to [insert relevant job title] who will review the breach\nand determine adequate consequences, which can include [ insert consequences here such as\nconfiscation of the device and or termination of employment.]\nIndemnity\n[Business Name] bears no responsibility whatsoever for any legal action threatened or started\ndue to conduct and activities of staff in accessing or using these resources or facilities. All staff\nindemnify [Business Name] against any and all damages, costs and expenses suffered by\n[Business Name] arising out of any unlawful or improper conduct and activity, and in respect of"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah7",
        "code": "AH7",
        "title": "Information Technology Security Policy",
        "pages": [
            {
                "page": 14,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH7: Information Technology Security Policy\nInformation Technology Security Policy\nPolicy Number: [insert unique number]Policy Date: [insert date of policy]Guidance: This policy\nshould be read and carried out by all staff. Edit this policy so it suits the needs of your business.\nPurpose of the Policy\nThis policy provides guidelines for the protection and use of information technology assets and\nresources within the business to ensure integrity, confidentiality and availability of data and\nassets.\nProcedures\nPhysical Security\nFor all servers, mainframes and other network assets, the area must be secured with adequate\nventilation and appropriate access through [insert relevant security measure here, such as\nkeypad, lock etc.]It will be the responsibility of [insert relevant job title here] to ensure that this\nrequirement is followed at all times. Any employee becoming aware of a breach to this security\nrequirement is obliged to notify [insert relevant job title here] immediately.All security and\nsafety of all portable technology, [insert relevant types here, such as laptop, notepads, iPad\netc.] will be the responsibility of the employee who has been issued with the [insert relevant\ntypes here, such as laptop, notepads, iPads, mobile phones etc.].Each employee is required to\nuse [insert relevant types here, such as locks, passwords, etc.]and to ensure the asset is kept\nsafely at all times to protect the security of the asset issued to them.In the event of loss or\ndamage, [insert relevant job title here] will assess the security measures undertaken to\ndetermine if the employee will be required to reimburse the business for the loss or\ndamage.All [insert relevant types here, such as laptop, notepads, iPads etc.] when kept at the\noffice desk is to be secured by [insert relevant security measure here, such as keypad, lock\netc.] provided by [insert relevant job title here]"
                    }
                ]
            },
            {
                "page": 15,
                "blocks": [
                    {
                        "type": "text",
                        "value": "Information Security\nAll [insert relevant data to be backed up here – either general such as sensitive, valuable, or\ncritical business data or provide a checklist of all data to be backed up ] is to be backed-up.It is\nthe responsibility of [insert relevant job title here]to ensure that data back-ups are\nconducted [insert frequency of back-ups here] and the backed up data is kept [insert where\nback up data is to be kept e.g. cloud, offsite venue, employees home etc. here]All technology\nthat has internet access must have anti-virus software installed. It is the responsibility of [insert\nrelevant job title here] to install all anti-virus software and ensure that this software remains up\nto date on all technology used by the business.All information used within the business is to\nadhere to the privacy laws and the business’s confidentiality requirements. Any employee\nbreaching this will be [insert relevant consequence here]\nTechnology Access\nEvery employee will be issued with a unique identification code to access the business\ntechnology and will be required to set a password for access every [insert frequency here]Each\npassword is to be [insert rules relating to password creation here, such as number of alpha and\nnumeric etc.] and is not to be shared with any employee within the business.[insert relevant job\ntitle here] is responsible for the issuing of the identification code and initial password for all\nemployees.Where an employee forgets the password or is ‘locked out’ after[insert a number\nhere e.g. three attempts], then [insert relevant job title here] is authorised to reissue a new\ninitial password that will be required to be changed when the employee logs in using the new\ninitial password.The following table provides the authorisation of access:\nTechnology – Hardware/ Software Persons authorised for access\n[insert name or type of technology here] [insert authorised persons or job titles here]\n[insert name or type of technology here] [insert authorised persons or job titles here]\n[insert name or type of technology here] [insert authorised persons or job titles here]\n[insert name or type of technology here] [insert authorised persons or job titles here]\nEmployees are only authorised to use business computers for personal use [insert when this is\nallowable and what they can personally use it for here, such as internet usage etc.] For internet\nand social media usage, refer to the Human Resources Manual. It is the responsibility of [insert\nrelevant job title here] to keep all procedures for this policy up to date.\nAdditional Policies for Information Technology Security"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah8",
        "code": "AH8",
        "title": "Information Technology Administration Policy",
        "pages": [
            {
                "page": 16,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH8: Information Technology Administration Policy\nPolicy Number: [insert unique number]\nPolicy Date: [insert date of policy]\nGuidance: This policy should be read and carried out by all staff. Edit this policy so it suits the\nneeds of your business.\nPurpose of the Policy\nThis policy provides guidelines for the administration of information technology assets and\nresources within the business.\nProcedures\nAll software installed and the licence information must be registered on the [insert where these\nrecords are to be kept]. It is the responsibility of [insert relevant job title here] to ensure that\nthis registered is maintained. The register must record the following information:\n• What software is installed on every machine\n• What licence agreements are in place for each software package\n• Renewal dates if applicable.\n[insert relevant job title here] is responsible for the maintenance and management of all service\nagreements for the business technology. Any service requirements must first be approved\nby [insert relevant job title here]. [insert relevant job title here] is responsible for maintaining\nadequate technology spare parts and other requirements including [insert specific technology\nrequirements here, such as toners, printing paper etc.]A technology audit is to be\nconducted [insert frequency here e.g. annually] by [insert relevant job title here] to ensure that\nall information technology policies are being adhered to.Any unspecified technology\nadministration requirements should be directed to [insert relevant job title here]\nAdditional Policies for Information Technology Administration\nGuidance: add, link or remove the policies listed below as required.\nIT Service Agreements Policy\nPurchasing Policy"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah9",
        "code": "AH9",
        "title": "Website Policy",
        "pages": [
            {
                "page": 16,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH9: Website Policy"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah10",
        "code": "AH10",
        "title": "Electronic Transactions Policy",
        "pages": [
            {
                "page": 17,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH10: Electronic Transactions Policy"
                    }
                ]
            },
            {
                "page": 18,
                "blocks": [
                    {
                        "type": "text",
                        "value": "Policy Number: [insert unique number]\nPolicy Date: [insert date of policy]\nGuidance: This policy should be read and carried out by all staff. Edit this policy so it suits the\nneeds of your business.\nPurpose of the Policy\nThis policy provides guidelines for all electronic transactions undertaken on behalf of the\nbusiness. The objective of this policy is to ensure that use of electronic funds transfers and\nreceipts are started, carried out, and approved in a secure manner.\nProcedures\nElectronic Funds Transfer (EFT)\nIt is the policy of [Business Name] that all payments and receipts should be made by EFT where\nappropriate.All EFT payments and receipts must adhere to all finance policies in the Financial\npolicies and procedures manual. All EFT arrangements, including receipts and payments must\nbe submitted to [insert relevant department of the business here, e.g. finance department].EFT\npayments must have the appropriate authorisation for payment in line with the financial\ntransactions policy in the Financial policies and procedures manual.EFT payments must be\nappropriately recorded in line with finance policy in the Financial policies and procedures\nmanual.EFT payments once authorised, will be entered into the [insert title of payment system\nhere e.g. NAB online system] by [insert relevant job title here]EFT payments can only be\nreleased for payment once pending payments have been authorised by [insert relevant job title\nhere] For good control over EFT payments, ensure that the persons authorising the payments\nand making the payment are not the same person.All EFT receipts must be reconciled to\ncustomer records [insert frequency here e.g. once a week etc.]Where EFT receipt cannot be\nallocated to customer account, it is responsibility of [insert relevant job title here] to investigate.\nIn the event that the customer account cannot be identified within [insert length of time here,\nsuch as one month] the receipted funds must be [insert action here such as allocated to\nsuspense account or returned to source etc.]. [insert relevant job title here] must authorise this\ntransaction.It is the responsibility of [insert relevant job title here]to annually review EFT\nauthorisations for initial entry, alterations, or deletion of EFT records, including supplier\npayment records and customer receipt records.\nElectronic Purchases\nAll electronic purchases by any authorised employee must adhere to the purchasing policy in\nthe Financial policies and procedures manual.Where an electronic purchase is being considered,\nthe person authorising this transaction must ensure that the internet sales site is secure and\nsafe and be able to demonstrate that this has been reviewed.All electronic purchases must be"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah11",
        "code": "AH11",
        "title": "IT Service Agreements Policy",
        "pages": [
            {
                "page": 19,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH11: IT Service Agreements Policy\nPolicy Number: [insert unique number]\nPolicy Date: [insert date of policy]\nGuidance: This policy should be read and carried out by all staff. Edit this policy so it suits the\nneeds of your business.\nPurpose of the Policy\nThis policy provides guidelines for all IT service agreements entered into on behalf of the\nbusiness.\nProcedures\nThe following IT service agreements can be entered into on behalf of the business:Guidance:\nInsert the acceptable IT services for your business – the following dot points will assist.\n• Provision of general IT services\n• Provision of network hardware and software\n• Repairs and maintenance of IT equipment\n• Provision of business software\n• Provision of mobile phones and relevant plans\n• Website design, maintenance etc.\n• [insert type of IT service here].\nAll IT service agreements must be reviewed by [insert who should review, recommended lawyer\nor solicitor] before the agreement is entered into. Once the agreement has been reviewed and\nrecommendation for execution received, then the agreement must be approved by [insert\nrelevant job title here] All IT service agreements, obligations and renewals must be recorded\n[insert where the agreements are to be recorded here] Where an IT service agreement\nrenewal is required, in the event that the agreement is substantially unchanged from the"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah12",
        "code": "AH12",
        "title": "Emergency Management of Information Technology",
        "pages": [
            {
                "page": 20,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH12: Emergency Management of Information Technology\nPolicy Number: [insert unique number]\nPolicy Date: [insert date of policy]\nGuidance: This policy should be read and carried out by all staff. Edit this policy so it suits the\nneeds of your business.\nPurpose of the Policy\nThis policy provides guidelines for emergency management of all information technology within\nthe business.\nProcedures\nIT Hardware Failure\nWhere there is failure of any of the business’s hardware, this must be referred to [insert\nrelevant job title here] immediately.It is the responsibility of [insert relevant job title\nhere]to [insert relevant actions that should be undertaken here] in the event of IT hardware\nfailure.It is the responsibility of [insert relevant job title here]to undertake tests on planned\nemergency procedures [insert frequency here, recommended quarterly] to ensure that all\nplanned emergency procedures are appropriate and minimise disruption to business\noperations.\nPoint of Sale Disruptions\nIn the event that point of sale (POS) system is disrupted, the following actions must be\nimmediately undertaken:Guidance: Insert the actions required for your business – the following\ndot points will assist."
                    }
                ]
            }
        ]
    },
    {
        "id": "ah13",
        "code": "AH13",
        "title": "Windows Group Policy",
        "pages": [
            {
                "page": 21,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH13: Windows Group Policy\nMS Windows Server 2012 R2 Baseline Security Standards\nVersion 1.3\nReferences:\n6.100 – Information Technology and Security Policy 6.101 – Use of County Information\nTechnology Resources\nDeveloped:\nHost Strengthening & Isolation Work Group, Mitigation of Cyber Terrorism\nRELEASE NOTES AND HISTORY LOG"
                    }
                ]
            },
            {
                "page": 22,
                "blocks": [
                    {
                        "type": "text",
                        "value": "The content in this document will be periodically updated to reflect the changes in the County\nenvironment as well as the Microsoft Windows Server 2012 software features and\ncapabilities. In addition, this document will be constantly maintained to capture industry best\npractices as the technology and standards continues to evolve."
                    },
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "NEW",
                                "",
                                ""
                            ],
                            [
                                "DATE",
                                "VERSION NUMBER",
                                "MODIFIED BY",
                                "DESCRIPTION of CHANGE 1) SET team developed"
                            ],
                            [
                                "11/14/2014",
                                "1.0",
                                "C. Hinton (ISD-ITSS)",
                                "initial document. 1) Remove Password"
                            ],
                            [
                                "12/15/2014",
                                "1.1",
                                "C. Hinton",
                                "Section and Workstation Section 1) Update Member Server"
                            ],
                            [
                                "2/17/2015",
                                "1.2",
                                "C. Hinton",
                                "Section 1) Added User Account"
                            ],
                            [
                                "4/01/2015",
                                "1.3",
                                "C. Hinton",
                                "Control value 2) Re- numbered all sections Confirmation of settings applied on live server from"
                            ],
                            [
                                "4/29/2015",
                                "",
                                "C. Hinton",
                                "Anthony Phung, ISD – Mid- Range Computing."
                            ]
                        ]
                    },
                    {
                        "type": "text",
                        "value": "Table of Contents\n1 – Purpose\n2 – Overview\n3 – Windows Server 2012 IT Security Policy Checklist – Member Server Policy\n4 – Windows Server 2012 IT Security Policy Checklist – User Policy\n5 – Windows Server 2012 IT Security Policy Checklist – DHCP Hardening\n6 – Windows Server 2012 IT Security Policy Checklist – DNS Hardening\n7 – Windows Server 2012 IT Security Policy Checklist – Web Services"
                    }
                ]
            },
            {
                "page": 23,
                "blocks": [
                    {
                        "type": "text",
                        "value": "Hardening\n1 Purpose\nThe purpose of this document is to establish baseline security standards specific to host\nstrengthening. These standards identify the baseline security settings when using Microsoft\nWindows Server 2012.\n2 Overview\nThis document, with accompanying Windows Server 2012 Security Checklists, outlines the\nsettings that are to be implemented to provide a baseline level of security for each server\nrunning Microsoft Windows Server 2012 either stand alone or as part of a Windows Active\nDirectory/Domain Group Policy. Descriptions of the settings are found in the Microsoft\nWindows Server 2012 Security Guide, Version 3.0 and the Center for Internet Security’s\nMicrosoft Windows Server 2012 R2 Benchmark v 1.1. The settings are divided into categories\nthat correspond to the intended role of the Windows Server. The roles being configured are as\nfollows:\n• Member Server Policy\n• User Policy\n• DHCP Services\n• DNS Services\n• Web Service\nMicrosoft recommends using a new core installation of the operating system to start your\nconfiguration work so that Server Manager optimally configures just the roles and features that\nyou select. However, if you cannot perform a new installation, ensure to check the following\ncommon security configurations before you start a role-specific setup. This approach helps to\nminimize the possibility of settings from previous configurations interfering with the server's\nsecurity settings for its new role. The settings in this standards document are grouped into two\ncategories, “Mandatory” and “Recommended.” These categories are defined as follows:\nMandatory\n– All Mandatory settings (in red) must be applied with no exception.\nRecommended"
                    }
                ]
            },
            {
                "page": 24,
                "blocks": [
                    {
                        "type": "text",
                        "value": "– All Recommended settings must be applied unless the business operation is severely\nimpacted. Exceptions to settings in this category must have documented justification for the\nexception and Department management approval.\n3 WINDOWS SERVER 2012 IT SECURITY POLICY CHECKLIST – MEMBER SERVER POLICY\nThis checklist notes the steps needed to secure servers running Windows Server 2012 through\nthe use of Group Policies. The Microsoft Windows Server 2012 Security Guide Version 1.0 and\nthe Center for Internet Security’sMicrosoft Windows Server 2012 R2 Benchmark v 1.1 provides\ndetailed explanation of these settings. Copies of this completed checklist may prove useful for\nlong-term documentation of preventative measures.\nOrganization\nName: Date:\nContact\nInformation:"
                    },
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Computer Configuration (Enabled)",
                                "Mandatory",
                                "Recommended"
                            ],
                            [
                                "3.0",
                                "Local Policies/Audit Policy",
                                "",
                                ""
                            ],
                            [
                                "3.0.1",
                                "Audit account logon events – Success, Failure",
                                "X",
                                ""
                            ],
                            [
                                "3.0.2",
                                "Audit account management – Success, Failure",
                                "X",
                                ""
                            ],
                            [
                                "3.0.3",
                                "Audit logon events – Success, Failure",
                                "X",
                                ""
                            ],
                            [
                                "3.0.4",
                                "Audit policy change – Success",
                                "X",
                                ""
                            ],
                            [
                                "3.0.5",
                                "Audit system events – Success *and Failure",
                                "X",
                                ""
                            ],
                            [
                                "3.1",
                                "Local Policies/User Rights Assignment Access credential manager as a trusted caller – No",
                                "",
                                ""
                            ],
                            [
                                "3.1.1",
                                "One* Access this computer from the network –",
                                "X",
                                ""
                            ],
                            [
                                "3.1.2",
                                "Administrators, Authenticated Users",
                                "",
                                "X"
                            ],
                            [
                                "3.1.3",
                                "Act as part of the operating system – No One*",
                                "",
                                "X"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 25,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Adjust memory quotas for a process – Administrators,",
                                "",
                                ""
                            ],
                            [
                                "3.1.4",
                                "Local Service, Network Service*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.5",
                                "Allow log on locally – Administrators Allow log on through Remote Desktop Services –",
                                "",
                                "X"
                            ],
                            [
                                "3.1.6",
                                "Administrators, Remote Desktop Users*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.7",
                                "Back up files and directories - Administrators Change the system time – Administrators, Local",
                                "",
                                "X"
                            ],
                            [
                                "3.1.8",
                                "Service*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.9",
                                "Change the time zone – Administrators, Local Service*",
                                "",
                                ""
                            ],
                            [
                                "3.1.10",
                                "Create a pagefile – Administrators*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.11",
                                "Create a token object – No One* Create global objects – Administrators, Local Service,",
                                "",
                                "X"
                            ],
                            [
                                "3.1.12",
                                "Network Service, Service*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.13",
                                "Create permanent shared objects – No One*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.14",
                                "Create symbolic links – Administrators*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.15",
                                "Debug programs – Administrators* Deny access to this computer from the network –",
                                "",
                                "X"
                            ],
                            [
                                "3.1.16",
                                "Guests",
                                "X",
                                ""
                            ],
                            [
                                "3.1.17",
                                "Deny log on as a batch job – Guests",
                                "X",
                                ""
                            ],
                            [
                                "3.1.18",
                                "Deny log on as a service – Guests",
                                "X",
                                ""
                            ],
                            [
                                "3.1.19",
                                "Deny log on locally – Guests*",
                                "X",
                                ""
                            ],
                            [
                                "3.1.20",
                                "Deny log on through Remote Desktop Services – Guests Enable computer and user accounts to be trusted for",
                                "X",
                                ""
                            ],
                            [
                                "3.1.21",
                                "delegation – No One* Force shutdown from a remote system –",
                                "",
                                "X"
                            ],
                            [
                                "3.1.22",
                                "Administrators*",
                                "",
                                "X"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 26,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Generate security audits – Local Service, Network",
                                "",
                                ""
                            ],
                            [
                                "3.1.23",
                                "Service* Impersonate a client after authentication –",
                                "",
                                "X"
                            ],
                            [
                                "3.1.24",
                                "Administrators, Local Service, Network Service, Service*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.25",
                                "Increase scheduling priority – Administrators*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.26",
                                "Load and unload device drivers – Administrators*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.27",
                                "Lock pages in memory – No One*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.28",
                                "Manage auditing and security log – Administrators*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.29",
                                "Modify an object label – No One",
                                "",
                                "X"
                            ],
                            [
                                "3.1.30",
                                "Modify firmware environment values – Administrators*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.31",
                                "Perform volume maintenance tasks – Administrators*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.32",
                                "Profile single process – Administrators* Profile system performance – Administrators, NT",
                                "X",
                                ""
                            ],
                            [
                                "3.1.33",
                                "Service\\WdiServiceHost* Replace a process level token – Local Service, Network",
                                "X",
                                ""
                            ],
                            [
                                "3.1.34",
                                "Service*",
                                "",
                                "X"
                            ],
                            [
                                "3.1.35",
                                "Restore files and directories – Administrators",
                                "",
                                "X"
                            ],
                            [
                                "3.1.36",
                                "Shutdown the system - Administrators Take ownership of files or other objects –",
                                "X",
                                ""
                            ],
                            [
                                "3.1.37",
                                "Administrators*",
                                "",
                                "X"
                            ],
                            [
                                "3.2",
                                "Local Policies/Security Options",
                                "",
                                ""
                            ],
                            [
                                "3.2.1",
                                "Accounts Block Microsoft accounts - Users can’t add or log on",
                                "",
                                ""
                            ],
                            [
                                "3.2.1.1",
                                "with Microsoft accounts",
                                "",
                                "X"
                            ],
                            [
                                "3.2.1.2",
                                "Guests account status – Disabled*",
                                "X",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 27,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Limit local account use of blank passwords to console",
                                "",
                                ""
                            ],
                            [
                                "3.2.1.3",
                                "logon only – Enabled*",
                                "X",
                                ""
                            ],
                            [
                                "3.2.1.4",
                                "Rename administrator account",
                                "X",
                                ""
                            ],
                            [
                                "3.2.1.5",
                                "Rename Guest account",
                                "",
                                "X"
                            ],
                            [
                                "3.2.2",
                                "Audit Force audit policy subcategory settings (Windows Vista",
                                "",
                                ""
                            ],
                            [
                                "3.2.2.1",
                                "or later) to override audit policy category settings - Enabled Shut down system immediately if unable to log security",
                                "",
                                "X"
                            ],
                            [
                                "3.2.2.2",
                                "audits – Disabled*",
                                "",
                                "X"
                            ],
                            [
                                "3.2.3",
                                "Devices Allowed to format and eject removable media –",
                                "",
                                ""
                            ],
                            [
                                "3.2.3.1",
                                "Administrators*",
                                "",
                                "X"
                            ],
                            [
                                "3.2.3.2",
                                "Prevent users from installing printer drivers – Enabled*",
                                "X",
                                ""
                            ],
                            [
                                "3.2.4",
                                "Domain Member Digitally encrypt or sign secure channel data (always) –",
                                "",
                                ""
                            ],
                            [
                                "3.2.4.1",
                                "Enabled* Digitally encrypt secure channel data (when possible) –",
                                "",
                                "X"
                            ],
                            [
                                "3.2.4.2",
                                "Enabled* Digitally sign secure channel data (when possible) –",
                                "",
                                "X"
                            ],
                            [
                                "3.2.4.3",
                                "Enabled* Disable machine account password changes –",
                                "",
                                "X"
                            ],
                            [
                                "3.2.4.4",
                                "Disabled* Maximum machine account password age – 30 days or",
                                "X",
                                ""
                            ],
                            [
                                "3.2.4.5",
                                "fewer Require h4 (Windows 2000 or later) session key –",
                                "X",
                                ""
                            ],
                            [
                                "3.2.4.6",
                                "Enabled",
                                "X",
                                ""
                            ],
                            [
                                "3.2.5",
                                "Interactive Logon",
                                "",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 28,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "3.2.5.1",
                                "Do not display last user name – Enabled",
                                "X",
                                ""
                            ],
                            [
                                "3.2.5.2",
                                "Do not require CTRL+ALT+DEL – Disabled*",
                                "X",
                                ""
                            ],
                            [
                                "3.2.5.3",
                                "Machine inactivity limit – 300 to 600 seconds",
                                "X",
                                ""
                            ],
                            [
                                "3.2.5.4",
                                "Message text for users attempting to log on – This computer system, including all related equipment, networks, and networked devices, are the property of Los Angeles County. This computer system is intended for authorized use only, and is being monitored for all lawful purposes. All information received, sent or stored on Los Angeles County computer systems may be, examined, recorded, copied, and used for authorized purposes. Evidence of illegal or unauthorized use may be used for criminal, administrative, or other adverse action. Unauthorized users are subject to prosecution. Click OK if you agree to the above terms. Message title for users attempting to log on – Not",
                                "",
                                "X"
                            ],
                            [
                                "3.2.5.5",
                                "Defined Number of previous logons to cache (in case domain",
                                "",
                                "X"
                            ],
                            [
                                "3.2.5.6",
                                "controller is not available) – 4 logon or fewer Prompt user to change password before expiration – 14",
                                "X",
                                ""
                            ],
                            [
                                "3.2.5.7",
                                "days*",
                                "X",
                                ""
                            ],
                            [
                                "3.2.5.8",
                                "Smart card removal behavior – Lock Workstation",
                                "",
                                "X"
                            ],
                            [
                                "3.2.6",
                                "Microsoft Network Client",
                                "",
                                ""
                            ],
                            [
                                "3.2.6.1",
                                "Digitally sign communications (always) – Enabled Digitally sign communications (if server agrees) –",
                                "",
                                "X"
                            ],
                            [
                                "3.2.6.2",
                                "Enabled* Send unencrypted password to third-party SMB servers",
                                "",
                                "X"
                            ],
                            [
                                "3.2.6.3",
                                "– Disabled*",
                                "X",
                                ""
                            ],
                            [
                                "3.2.7",
                                "Microsoft Network Server",
                                "",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 29,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Amount of idle time required before suspending",
                                "",
                                ""
                            ],
                            [
                                "3.2.7.1",
                                "session – 15 minutes*",
                                "",
                                "X"
                            ],
                            [
                                "3.2.7.2",
                                "Digitally sign communications (always) – Enabled Digitally sign communications (if client agrees) –",
                                "",
                                "X"
                            ],
                            [
                                "3.2.7.3",
                                "Enabled",
                                "",
                                "X"
                            ],
                            [
                                "3.2.7.4",
                                "Disconnect clients when logon hours expire - Enabled* Server SPN target name validation level – Accept if",
                                "",
                                "X"
                            ],
                            [
                                "3.2.7.5",
                                "provided by client",
                                "",
                                "X"
                            ],
                            [
                                "3.2.8",
                                "Network Access",
                                "",
                                ""
                            ],
                            [
                                "3.2.8.1",
                                "Allow anonymous SID/Name translation – Disabled* Do not allow anonymous enumeration of SAM",
                                "X",
                                ""
                            ],
                            [
                                "3.2.8.2",
                                "accounts – Enabled* Do not allow anonymous enumeration of SAM",
                                "X",
                                ""
                            ],
                            [
                                "3.2.8.3",
                                "accounts and shares – Enabled Let Everyone permissions apply to anonymous users –",
                                "X",
                                ""
                            ],
                            [
                                "3.2.8.4",
                                "Disabled* Named Pipes that can be accessed anonymously –",
                                "X",
                                ""
                            ],
                            [
                                "3.2.8.5",
                                "None* Remotely accessible registry paths - * System\\CurrentControlSet\\Control\\ProductOptions",
                                "",
                                ""
                            ],
                            [
                                "3.2.8.6",
                                "Systems\\CurrentControlSet\\Control\\Server Applications, Software\\Microsoft\\Windows NT\\CurrentVersion Remotely accessible registry paths and sub-paths – * System\\CurrentControlSet\\Control\\Print\\Printers System\\CurrentControlSet\\Services\\Eventlog Software\\Microsoft\\OLAP Server",
                                "",
                                "X"
                            ],
                            [
                                "3.2.8.7",
                                "Software\\Microsoft\\Windows NT\\CurrentVersion\\Print Software\\Microsoft\\Windows NT\\CurrentVersion\\Windows System\\CurrentControlSet\\Control\\ContentIndex",
                                "",
                                "X"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 30,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "System\\CurrentControlSet\\Control\\Terminal Server System\\CurrentControlSet\\Control\\Terminal Server\\UserConfig System\\CurrentControlSet\\Control\\Terminal Server\\DefaultUserConfiguration Software\\Microsoft\\Windows NT\\CurrentVersion\\Perflib System\\CurrentControlSet\\Services\\SysmonLog. Restrict anonymous access to Named Pipes and Shares",
                                "",
                                ""
                            ],
                            [
                                "3.2.8.8",
                                "– Enabled*",
                                "X",
                                ""
                            ],
                            [
                                "3.2.8.9",
                                "Shares that can be accessed anonymously – None* Sharing and security model for local accounts – Classic",
                                "X",
                                ""
                            ],
                            [
                                "3.2.8.10",
                                "– local users authenticate as themselves*",
                                "",
                                "X"
                            ],
                            [
                                "3.2.9",
                                "Network Security Allow Local System to use computer identity for NTLM -",
                                "",
                                ""
                            ],
                            [
                                "3.2.9.1",
                                "Enabled",
                                "",
                                "X"
                            ],
                            [
                                "3.2.9.2",
                                "Allow LocalSystem NULL session fallback - Disabled Allow PKU2U authentication requests to this computer",
                                "",
                                "X"
                            ],
                            [
                                "3.2.9.3",
                                "to use online identities – Disabled* Configure encryption types allowed for Kerberos –",
                                "X",
                                ""
                            ],
                            [
                                "3.2.9.4",
                                "RC4\\AES128\\AES256\\Future types Do not store LAN Manager hash value on next",
                                "",
                                "X"
                            ],
                            [
                                "3.2.9.5",
                                "password change – Enabled*",
                                "X",
                                ""
                            ],
                            [
                                "3.2.9.6",
                                "Force logoff when logon hours expire - Enabled LAN Manager authentication level – Send NTLMv2",
                                "",
                                "X"
                            ],
                            [
                                "3.2.9.7",
                                "response only. Refuse LM & NTLM",
                                "X",
                                ""
                            ],
                            [
                                "3.2.9.8",
                                "LDAP client signing requirements – Negotiate signing* Minimum session security for NTLM SSP based",
                                "",
                                "X"
                            ],
                            [
                                "3.2.9.9",
                                "(including secure RPC) clients – Require NTLMv2 session securityRequire 128-bit encryption",
                                "X",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 31,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Minimum session security for NTLM SSP based",
                                "",
                                ""
                            ],
                            [
                                "3.2.9.10",
                                "(including secure RPC) servers – Require NTLMv2 session securityRequire 128-bit encryption",
                                "X",
                                ""
                            ],
                            [
                                "3.2.10",
                                "Recovery Console",
                                "",
                                ""
                            ],
                            [
                                "3.2.10.1",
                                "Allow automatic administrative logon – Disabled* Allow floppy copy and access to all drives and all",
                                "X",
                                ""
                            ],
                            [
                                "3.2.10.2",
                                "folders – Disabled*",
                                "",
                                "X"
                            ],
                            [
                                "3.2.11",
                                "Shutdown Allow system to be shut down without having to log on",
                                "",
                                ""
                            ],
                            [
                                "3.2.11.1",
                                "– Disabled*",
                                "X",
                                ""
                            ],
                            [
                                "3.2.12",
                                "Cryptography Use FIPS compliant algorithms for encryption, hashing,",
                                "",
                                ""
                            ],
                            [
                                "3.2.12.1",
                                "and signing - Disabled",
                                "",
                                "X"
                            ],
                            [
                                "3.2.13",
                                "System Objects Require case insensitivity for non-Windows subsystems",
                                "",
                                ""
                            ],
                            [
                                "3.2.13.1",
                                "– Enabled* Strengthen default permissions of internal system",
                                "",
                                "X"
                            ],
                            [
                                "3.2.13.2",
                                "objects (e.g., Symbolic Links) – Enabled*",
                                "",
                                "X"
                            ],
                            [
                                "3.2.14",
                                "System Settings",
                                "",
                                ""
                            ],
                            [
                                "3.2.14.1",
                                "Optional subsystems – None Use Certificate Rules on Windows Executables for",
                                "",
                                "X"
                            ],
                            [
                                "3.2.14.2",
                                "Software Restriction Policies – Enabled",
                                "",
                                "X"
                            ],
                            [
                                "3.2.15",
                                "User Account Control Admin Approval Mode for the Built-in Administrator",
                                "",
                                ""
                            ],
                            [
                                "3.2.15.1",
                                "account - Enabled Allow UIAccess application to prompt for elevation",
                                "",
                                "X"
                            ],
                            [
                                "3.2.15.2",
                                "without using the secure desktop – Disabled*",
                                "",
                                "X"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 32,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Behavior of the elevation prompt for administrators in",
                                "",
                                ""
                            ],
                            [
                                "3.2.15.3",
                                "Admin Approval Mode – Prompt for consent on the secure desktop Behavior of the elevation prompt for standard users –",
                                "",
                                "X"
                            ],
                            [
                                "3.2.15.4",
                                "Automatically deny elevation requests Detect application installation and prompt for elevation",
                                "",
                                "X"
                            ],
                            [
                                "3.2.15.5",
                                "– Enabled* Only elevate UIAccess applications that are installed in",
                                "",
                                "X"
                            ],
                            [
                                "3.2.15.6",
                                "secure locations – Enabled* Run all administrators in Admin Approval Mode –",
                                "",
                                "X"
                            ],
                            [
                                "3.2.15.7",
                                "Enabled* Switch to the secure desktop when prompting for",
                                "",
                                "X"
                            ],
                            [
                                "3.2.15.8",
                                "elevation – Enabled* Virtualize file and registry write failures to per-user",
                                "",
                                "X"
                            ],
                            [
                                "3.2.15.9",
                                "locations – Enabled*",
                                "",
                                "X"
                            ],
                            [
                                "3.2.16",
                                "Event Log",
                                "",
                                ""
                            ],
                            [
                                "3.2.16.1",
                                "Maximum application log size – 32,768 KB",
                                "",
                                "X"
                            ],
                            [
                                "3.2.16.2",
                                "Maximum security log size –196,608 KB",
                                "",
                                "X"
                            ],
                            [
                                "3.2.16.3",
                                "Maximum system log size –32,768 KB",
                                "",
                                "X"
                            ],
                            [
                                "3.2.16.4",
                                "Retention method for application log – As needed",
                                "",
                                "X"
                            ],
                            [
                                "3.2.16.5",
                                "Retention method for security log – As needed",
                                "",
                                "X"
                            ],
                            [
                                "3.2.16.6",
                                "Retention method for system log – As needed",
                                "",
                                "X"
                            ],
                            [
                                "3.17",
                                "Registry MACHINE\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Winlogon\\AutoAdminLogon",
                                "",
                                ""
                            ],
                            [
                                "3.17.1",
                                "Permissions",
                                "",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 33,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Deny – BUILTIN\\Users – Full control – This key and",
                                "",
                                "",
                                ""
                            ],
                            [
                                "3.17.1.1",
                                "subkeys",
                                "X",
                                "",
                                ""
                            ],
                            [
                                "3.17.1.2",
                                "Allow – CREATOR OWNER – Full control – Subkeys only Allow – NT AUTHORITY\\SYSTEM – Full control – This",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "3.17.1.3",
                                "key and subkeys Allow – BUILTIN\\Administrators – Full control – This key",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "3.17.1.4",
                                "and subkeys",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "4.4",
                                "Administrative Templates Systems/Internet Communication Management/Internet",
                                "",
                                "",
                                ""
                            ],
                            [
                                "4.4.1",
                                "Communication Settings Turn off the Windows Messenger Customer Experience",
                                "",
                                "",
                                ""
                            ],
                            [
                                "4.4.1.1",
                                "Improvement Program - Enabled Windows Components/Terminal Services/Remote Desktop",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "4.4.4",
                                "Connection Client",
                                "",
                                "",
                                ""
                            ],
                            [
                                "4.4.4.1",
                                "Do not allow passwords to be saved - Enabled",
                                "X",
                                "",
                                ""
                            ],
                            [
                                "4.5",
                                "User Configuration (Disabled) Policies Administrative Templates Policy definitions (ADMX files) retrieved from the local machine",
                                "",
                                "",
                                ""
                            ],
                            [
                                "4.5.1",
                                "Windows Components/Attachment Manager Notify antivirus programs when opening attachments -",
                                "",
                                "",
                                ""
                            ],
                            [
                                "4.5.1.1",
                                "Enabled",
                                "X",
                                "",
                                ""
                            ],
                            [
                                "Document reviewed and approved by responsible Department manager:",
                                "",
                                "",
                                "",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 34,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "Signature:",
                                ""
                            ],
                            [
                                "Date:",
                                ""
                            ]
                        ]
                    },
                    {
                        "type": "text",
                        "value": "4 WINDOWS SERVER 2012 IT SECURITY POLICY CHECKLIST – USER POLICY\nThis checklist notes the additional steps needed to secure servers running Windows Server\n2012 through the use of Group Policies. The Windows Server 2012 Security Guide provides\ndetailed explanation of these settings. Your Domain Controller should follow the checklist below\nin addition to or instead of Member Server Policies. Copies of this completed checklist may\nprove useful for long-term documentation of preventative measures.\nOrganization\nName: Date: Contact\nInformation:"
                    },
                    {
                        "type": "table",
                        "rows": [
                            [
                                "4.0",
                                "General",
                                "Mandatory",
                                "Recommended"
                            ],
                            [
                                "4.1",
                                "Delegation These groups and users have the specified permission for this GPO Domain Admins – Edit settings, delete,",
                                "",
                                ""
                            ],
                            [
                                "4.1.1",
                                "modify security – Not inherited \\Enterprise Admins – Edit settings,",
                                "",
                                "X"
                            ],
                            [
                                "4.1.2",
                                "delete, modify security – Not inherited",
                                "",
                                "X"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 35,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "4.1.3 4.1.4 4.1.5 4.2 4.3 4.3.1 4.3.1.1 4.3.1.2 4.3.1.3 Document reviewed and approved by responsible Department manager: Signature: Date:",
                                "NT AUTHORITY\\Authenticated Users – Read (from Security Filtering) – Not inherited NT AUTHORITY\\ENTERPRISE DOMAIN Controllers – Read – Not inherited NT AUTHORITY\\SYSTEM – Edit settings, delete, modify security – Not inherited Computer Configuration (Disabled) User Configuration (Enabled) Windows Settings/Internet Explorer Maintenance/URLs Home page URL – Department discretion Search bar URL – Not configured Online Support page URL – Not configured",
                                "",
                                "X X X X X X",
                                ""
                            ]
                        ]
                    },
                    {
                        "type": "text",
                        "value": "5 WINDOWS SERVER 2012 IT SECURITY POLICY CHECKLIST – DHCP Hardening\nThis checklist notes the steps needed to secure servers running Windows Server 2012 through\nthe use of Group Policies. The Windows Server 2012 Security Guide provides detailed\nexplanation of these settings. Copies of this completed checklist may prove useful for long-term\ndocumentation of preventative measures. This checklist does not represent a complete\nsolution, and should not be taken as such."
                    }
                ]
            },
            {
                "page": 36,
                "blocks": [
                    {
                        "type": "text",
                        "value": "Organization\nName: Date:\nContact Information:"
                    },
                    {
                        "type": "table",
                        "rows": [
                            [
                                "5.0",
                                "General",
                                "Mandatory",
                                "Recommended",
                                ""
                            ],
                            [
                                "5.0.1",
                                "Dedicate a computer to running the DHCP Server role. Deploy a Server Core installation of Windows Server",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "5.0.2",
                                "2012.",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "5.0.3",
                                "Use DHCPv6 functionality",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "5.0.4",
                                "Eliminate computers running rogue DHCP services. Add DHCP reservation and exclusion ranges for IP",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "5.0.5",
                                "Addresses",
                                "X",
                                "",
                                ""
                            ],
                            [
                                "5.0.6",
                                "Use NAP to enforce Computer Configuration Health",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "5.0.7",
                                "Restrict DHCP security group membership Configure DNS record ownership to help prevent stale",
                                "X",
                                "",
                                ""
                            ],
                            [
                                "5.0.8",
                                "DNS records",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "5.0.9",
                                "Relevant Group Policy Settings",
                                "",
                                "",
                                ""
                            ],
                            [
                                "5.0.10",
                                "DHCP Administrators – Domain Admins",
                                "X",
                                "",
                                ""
                            ],
                            [
                                "5.0.11",
                                "DHCP Users – Not created",
                                "",
                                "X",
                                ""
                            ],
                            [
                                "Document reviewed and approved by responsible Department manager:",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "Signature:",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "Date:",
                                "",
                                "",
                                "",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 37,
                "blocks": [
                    {
                        "type": "text",
                        "value": "6 WINDOWS SERVER 2012 IT SECURITY POLICY CHECKLIST – DNS Hardening\nThis checklist notes the steps needed to secure servers running Windows Server 2012 through\nthe use of Group Policies. The Windows Server 2012 Security Guide provides detailed\nexplanation of these settings. Copies of this completed checklist may prove useful for long-term\ndocumentation of preventative measures. This checklist does not represent a complete\nsolution, and should not be taken as such.\nOrganization\nName: Date: Contact\nInformation:"
                    },
                    {
                        "type": "table",
                        "rows": [
                            [
                                "6.0",
                                "General",
                                "Mandatory",
                                "Recommended"
                            ],
                            [
                                "6.0.1",
                                "Deploy a Server Core installation of Windows Server 2012 Protect DNS zones in unsecured locations by using read-",
                                "",
                                "X"
                            ],
                            [
                                "6.0.2",
                                "only domain controllers (RODCs). Combine the DNS and AD DS server roles on the same",
                                "",
                                "X"
                            ],
                            [
                                "6.0.3",
                                "server",
                                "",
                                "X"
                            ],
                            [
                                "6.0.4",
                                "Configure zones to use secure dynamic updates Restrict zone transfers to specific server computers",
                                "",
                                "X"
                            ],
                            [
                                "6.0.5",
                                "running DNS. Deploy separate server computers for internal and",
                                "X",
                                ""
                            ],
                            [
                                "6.0.6",
                                "external DNS resolution. Configure the firewall to protect the internal DNS",
                                "",
                                "X"
                            ],
                            [
                                "6.0.7",
                                "namespace",
                                "",
                                "X"
                            ],
                            [
                                "6.0.8",
                                "Enable recursion to only the appropriate DNS servers. Configure DNS to ignore non-authoritative resource",
                                "",
                                "X"
                            ],
                            [
                                "6.0.9",
                                "records.",
                                "",
                                "X"
                            ],
                            [
                                "6.0.10",
                                "Configure root hints for the internal DNS namespace.",
                                "",
                                "X"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 38,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "Document reviewed and approved by responsible Department manager:",
                                ""
                            ],
                            [
                                "Signature: Date:",
                                ""
                            ]
                        ]
                    },
                    {
                        "type": "text",
                        "value": "7 WINDOWS SERVER 2012 IT SECURITY POLICY CHECKLIST – Web Services Hardening\nThis checklist notes the steps needed to secure servers running Windows Server 2012 through\nthe use of Group Policies. The Windows Server 2012 Security Guide provides detailed\nexplanation of these settings. Copies of this completed checklist may prove useful for long-term\ndocumentation of preventative measures. This checklist does not represent a complete\nsolution, and should not be taken as such. Organization\nName: Date: Contact\nInformation:"
                    },
                    {
                        "type": "table",
                        "rows": [
                            [
                                "7.0",
                                "General",
                                "Mandatory",
                                "Recommended"
                            ],
                            [
                                "7.0.1",
                                "Deploy a Server Core installation of Windows Server 2012",
                                "",
                                "X"
                            ],
                            [
                                "7.0.2",
                                "Install the application development environment",
                                "",
                                "X"
                            ],
                            [
                                "7.0.3",
                                "Set the authentication mechanism",
                                "",
                                "X"
                            ],
                            [
                                "7.0.4",
                                "Remove unused IIS components",
                                "X",
                                ""
                            ],
                            [
                                "7.0.5",
                                "Configure a unique binding",
                                "",
                                "X"
                            ],
                            [
                                "7.0.6",
                                "Move Root Directories to a separate data partition",
                                "X",
                                ""
                            ],
                            [
                                "7.0.7",
                                "Configuring user account permissions",
                                "X",
                                ""
                            ],
                            [
                                "7.0.8",
                                "Enable Secure Sockets Layers (SSL) Consider additional specialized security configuration",
                                "",
                                "X"
                            ],
                            [
                                "7.0.9",
                                "measures Access control list hardening by specifying particular",
                                "",
                                ""
                            ],
                            [
                                "7.0.10",
                                "users in the ACL for content directory instead of allowing all domain users access to the site. Limit access to the Web site by using the built-in IIS7 URL",
                                "",
                                "X"
                            ],
                            [
                                "7.0.11",
                                "Authorization feature",
                                "",
                                "X"
                            ]
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "ah14",
        "code": "AH14",
        "title": "Windows Server Hardening",
        "pages": [
            {
                "page": 39,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "7.0.12 7.0.13 Document reviewed and approved by responsible Department manager: Signature: Date:",
                                "Restrict the IP Addresses of the client browsers you allow to connect to the Web server using the IPv4 Restriction Lists feature. Control many HTTP features, such as HTTP verbs, HTTP headers and URL size using the Request Filtering feature.",
                                "",
                                "X X"
                            ]
                        ]
                    },
                    {
                        "type": "text",
                        "value": "AH14: Windows Server Hardening\nVirtual Galaxy Info Tech Pvt Ltd Checklist"
                    },
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "",
                                "",
                                "",
                                "UT",
                                "Cat",
                                "Cat",
                                "Min"
                            ],
                            [
                                "Step",
                                "√",
                                "To Do Preparation and Installation If machine is a new install, protect it from hostile network",
                                "MFD",
                                "Note",
                                "I",
                                "II/III",
                                "Std"
                            ],
                            [
                                "1",
                                "",
                                "traffic, until the operating system is installed and hardened. Consider using the Security Configuration Wizard to assist",
                                "",
                                "§",
                                "!",
                                "!",
                                "4.5.1"
                            ],
                            [
                                "2",
                                "",
                                "in hardening the host. Service Packs and Hotfixes Install the latest service packs and hotfixes from",
                                "",
                                "§",
                                "",
                                "",
                                ""
                            ],
                            [
                                "3",
                                "",
                                "Microsoft.",
                                "",
                                "§",
                                "!",
                                "!",
                                "4.5.2"
                            ],
                            [
                                "4",
                                "",
                                "Enable automatic notification of patch availability. User Account Policies",
                                "",
                                "§",
                                "!",
                                "!",
                                "4.5.5"
                            ],
                            [
                                "5",
                                "",
                                "Set minimum password length.",
                                "1.1.4",
                                "§",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "6",
                                "",
                                "Enable password complexity requirements.",
                                "1.1.5",
                                "§",
                                "!",
                                "",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 40,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "",
                                "",
                                "",
                                "UT",
                                "Cat",
                                "Cat",
                                "Min"
                            ],
                            [
                                "Step",
                                "√",
                                "To Do Do not store passwords using reversible encryption.",
                                "MFD",
                                "Note",
                                "I",
                                "II/III",
                                "Std"
                            ],
                            [
                                "7",
                                "",
                                "(Default)",
                                "1.1.6",
                                "§",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "8",
                                "",
                                "Configure account lockout policy. User Rights Assignment Restrict the ability to access this computer from the",
                                "1.2",
                                "§",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "9",
                                "",
                                "network to Administrators and Authenticated Users. Do not grant any users the act as part of the operating",
                                "2.2.2",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "10",
                                "",
                                "system' right. (Default)",
                                "2.2.3",
                                "",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "11",
                                "",
                                "Restrict local logon access to Administrators. Deny guest accounts the ability to logon as a service, a",
                                "2.2.6 2.2.18-",
                                "§",
                                "",
                                "",
                                ""
                            ],
                            [
                                "12",
                                "",
                                "batch job, locally, or via RDP. Security Settings Place the University warning banner in the Message Text",
                                "21",
                                "",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "13",
                                "",
                                "for users attempting to log on. Disallow users from creating and logging in with",
                                "2.3.7.4",
                                "§",
                                "!",
                                "!",
                                "4.5.10"
                            ],
                            [
                                "14",
                                "",
                                "Microsoft accounts.",
                                "2.3.1.1",
                                "§",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "15",
                                "",
                                "Disable the guest account. (Default)",
                                "2.3.1.2",
                                "",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "16",
                                "",
                                "Require Ctrl+Alt+Del for interactive logins. (Default) Configure machine inactivity limit to protect idle",
                                "2.3.7.2",
                                "",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "17",
                                "",
                                "interactive sessions. Configure Microsoft Network Client to always digitally",
                                "2.3.7.3",
                                "",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "18",
                                "",
                                "sign communications. Configure Microsoft Network Client to digitally sign",
                                "2.3.8.1",
                                "",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "19",
                                "",
                                "communications if server agrees. (Default) Disable the sending of unencrypted passwords to third",
                                "2.3.8.2",
                                "",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "20",
                                "",
                                "party SMB servers.",
                                "2.3.8.3",
                                "",
                                "!",
                                "!",
                                "4.5.6"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 41,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "",
                                "",
                                "",
                                "UT",
                                "Cat",
                                "Cat",
                                "Min"
                            ],
                            [
                                "Step",
                                "√",
                                "To Do Configure Microsoft Network Server to always digitally",
                                "MFD",
                                "Note",
                                "I",
                                "II/III",
                                "Std"
                            ],
                            [
                                "21",
                                "",
                                "sign communications. Configure Microsoft Network Server to digitally sign",
                                "2.3.9.2",
                                "",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "22",
                                "",
                                "communications if client agrees. Network Access Controls",
                                "2.3.9.3",
                                "",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "23",
                                "",
                                "Disable anonymous SID/Name translation. (Default) Do not allow anonymous enumeration of SAM accounts.",
                                "2.3.11.1",
                                "",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "24",
                                "",
                                "(Default) Do not allow anonymous enumeration of SAM accounts",
                                "2.3.11.2",
                                "",
                                "!",
                                "!",
                                "4.5.5"
                            ],
                            [
                                "25",
                                "",
                                "and shares. Do not allow everyone permissions to apply to",
                                "2.3.11.3",
                                "",
                                "!",
                                "",
                                "4.5.5"
                            ],
                            [
                                "26",
                                "",
                                "anonymous users. (Default) Do not allow any named pipes to be accessed",
                                "2.3.11.4",
                                "",
                                "!",
                                "!",
                                "4.5.12"
                            ],
                            [
                                "27",
                                "",
                                "anonymously. Restrict anonymous access to named pipes and shares.",
                                "2.3.11.5",
                                "",
                                "!",
                                "",
                                "4.5.12"
                            ],
                            [
                                "28",
                                "",
                                "(Default)",
                                "2.3.11.8",
                                "",
                                "!",
                                "!",
                                "4.5.12"
                            ],
                            [
                                "29",
                                "",
                                "Do not allow any shares to be accessed anonymously. Require the \"Classic\" sharing and security model for local",
                                "2.3.11.9",
                                "",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "30",
                                "",
                                "accounts. (Default) Network Security Settings",
                                "2.3.11.10",
                                "",
                                "!",
                                "!",
                                "4.5.12"
                            ],
                            [
                                "31",
                                "",
                                "Allow Local System to use computer identity for NTLM.",
                                "2.3.12.1",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "32",
                                "",
                                "Disable Local System NULL session fall-back.",
                                "2.3.12.2",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "33",
                                "",
                                "Configure allowable encryption types for Kerberos.",
                                "2.3.12.4",
                                "",
                                "",
                                "",
                                ""
                            ],
                            [
                                "34",
                                "",
                                "Do not store LAN Manager hash values.",
                                "2.3.12.5",
                                "",
                                "!",
                                "!",
                                "4.5.13"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 42,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "",
                                "",
                                "",
                                "UT",
                                "Cat",
                                "Cat",
                                "Min"
                            ],
                            [
                                "Step",
                                "√",
                                "To Do Set LAN Manager authentication level to only allow",
                                "MFD",
                                "Note",
                                "I",
                                "II/III",
                                "Std"
                            ],
                            [
                                "35",
                                "",
                                "NTLMv2 and refuse LM and NTLM. Enable the Windows Firewall in all profiles (domain,",
                                "2.3.12.7",
                                "",
                                "!",
                                "",
                                "4.5.13"
                            ],
                            [
                                "36",
                                "",
                                "private, public). (Default) Configure the Windows Firewall in all profiles to block",
                                "9.1.1",
                                "",
                                "!",
                                "!",
                                "4.5.5"
                            ],
                            [
                                "37",
                                "",
                                "inbound traffic by default. (Default) Active Directory Domain Member Security Settings Digitally encrypt or sign secure channel data (always).",
                                "9.1.2",
                                "",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "38",
                                "",
                                "(Default) Digitally encrypt secure channel data (when possible).",
                                "2.3.6.1",
                                "",
                                "!",
                                "",
                                "4.5.6"
                            ],
                            [
                                "39",
                                "",
                                "(Default) Digitally sign secure channel data (when possible).",
                                "2.3.6.2",
                                "",
                                "!",
                                "!",
                                "4.5.6"
                            ],
                            [
                                "40",
                                "",
                                "(Default)",
                                "2.3.6.3",
                                "",
                                "!",
                                "!",
                                "4.5.6"
                            ],
                            [
                                "41",
                                "",
                                "Require h4 (Windows 2000 or later) session keys.",
                                "2.3.6.6",
                                "",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "42",
                                "",
                                "Configure the number of previous logons to cache. Audit Policy Settings",
                                "2.3.7.6",
                                "§",
                                "",
                                "",
                                ""
                            ],
                            [
                                "43",
                                "",
                                "Configure Account Logon audit policy.",
                                "17.1",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "44",
                                "",
                                "Configure Account Management audit policy.",
                                "17.2",
                                "§",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "45",
                                "",
                                "Configure Logon/Logoff audit policy.",
                                "17.5",
                                "§",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "46",
                                "",
                                "Configure Policy Change audit policy.",
                                "17.7",
                                "§",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "47",
                                "",
                                "Configure Privilege Use audit policy. Event Log Settings",
                                "17.8",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "48",
                                "",
                                "Configure Event Log retention method and size.",
                                "18.7.19",
                                "§",
                                "!",
                                "!",
                                "4.6.1"
                            ],
                            [
                                "49",
                                "",
                                "Configure log shipping (e.g. to Spunk).",
                                "",
                                "§",
                                "",
                                "",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 43,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "",
                                "",
                                "",
                                "UT",
                                "Cat",
                                "Cat",
                                "Min"
                            ],
                            [
                                "Step",
                                "√",
                                "To Do Additional Security Protection",
                                "MFD",
                                "Note",
                                "I",
                                "II/III",
                                "Std"
                            ],
                            [
                                "50",
                                "",
                                "Disable or uninstall unused services.",
                                "",
                                "",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "51",
                                "",
                                "Disable or delete unused users.",
                                "",
                                "",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "52",
                                "",
                                "Configure user rights to be as secure as possible.",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "53",
                                "",
                                "Ensure all volumes are using the NTFS file system.",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "54",
                                "",
                                "Configure file system permissions.",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "55",
                                "",
                                "Configure registry permissions.",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "56",
                                "",
                                "Disallow remote registry access if not required. Additional Steps Set the system date/time and configure it to synchronize",
                                "2.3.11.6",
                                "§",
                                "",
                                "",
                                ""
                            ],
                            [
                                "57",
                                "",
                                "against campus time servers.",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "58",
                                "",
                                "Install and enable anti-virus software.",
                                "",
                                "§",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "59",
                                "",
                                "Install and enable anti-spyware software.",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "60",
                                "",
                                "Configure anti-virus software to update daily.",
                                "",
                                "§",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "61",
                                "",
                                "Configure anti-spyware software to update daily. Provide secure storage for Confidential (category-I) Data as required. Security can be provided by means such as,",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "62",
                                "",
                                "but not limited to, encryption, access controls, file system audits, physically securing the storage media, or any combination thereof as deemed appropriate. Install software to check the integrity of critical operating",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "63",
                                "",
                                "system files. If RDP is utilized, set RDP connection encryption level to",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "64",
                                "",
                                "high. Make sure to restrict RDP access to local VPN group",
                                "",
                                "§",
                                "!",
                                "",
                                ""
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 44,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "",
                                "",
                                "",
                                "UT",
                                "Cat",
                                "Cat",
                                "Min"
                            ],
                            [
                                "Step",
                                "√",
                                "To Do and local campus management subnets. Do not allow RDP to be available to the Internet at large. Physical Security Set a BIOS/firmware password to prevent alterations in",
                                "MFD",
                                "Note",
                                "I",
                                "II/III",
                                "Std"
                            ],
                            [
                                "65",
                                "",
                                "system start up settings. Disable automatic administrative logon to recovery",
                                "",
                                "",
                                "",
                                "",
                                "4.4.1"
                            ],
                            [
                                "66",
                                "",
                                "console. Do not allow the system to be shut down without having",
                                "2.3.13.1",
                                "",
                                "!",
                                "",
                                ""
                            ],
                            [
                                "67",
                                "",
                                "to log on. (Default) Configure the device boot order to prevent unauthorized",
                                "2.3.14.1",
                                "",
                                "!",
                                "!",
                                ""
                            ],
                            [
                                "68",
                                "",
                                "booting from alternate media. Configure a screen-saver to lock the console's screen",
                                "",
                                "",
                                "!",
                                "",
                                "4.4.1"
                            ],
                            [
                                "69",
                                "",
                                "automatically if the host is left unattended.",
                                "",
                                "§",
                                "!",
                                "!",
                                ""
                            ]
                        ]
                    },
                    {
                        "type": "text",
                        "value": "UT NOTE: ADDENDUM\nThis list provides specific tasks related to the computing environment at The University of Texas\nat Austin."
                    },
                    {
                        "type": "table",
                        "rows": [
                            [
                                "UT Note: Addendum",
                                "If other alternatives are unavailable, this can be accomplished by installing a SOHO"
                            ],
                            [
                                "1",
                                "router/firewall in between the network and the host to be protected. The Security Configuration Wizard can greatly simplify the hardening of the server. Once the role for the host is defined, the Security Configuration Wizard can help create a system"
                            ],
                            [
                                "2",
                                "configuration based specifically on that role. It does not completely get rid of the need to make other configuration changes, though. More information is available at: Security Configuration Wizard. There are several methods available to assist you in applying patches in a timely fahion:"
                            ],
                            [
                                "3",
                                "Microsoft Update Service"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 45,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "• Microsoft Update checks your machine to identify missing patches and allows you to download and install them. • This is different than the \"Windows Update\" that is the default on Windows. Microsoft Update includes updates for many more Microsoft products, such as Office and Forefront Client Security. • This service is compatible with Internet Explorer only. Windows AutoUpdate via WSUS ITS offers a Windows Server Update Services Server for campus use using Microsoft's own update servers. It includes updates for additional Microsoft products, just like Microsoft Update, and provides additional administrative control for software deployment. Microsoft Baseline Security Analyzer This is a free host-based application that is available to download from Microsoft. In addition to detailing missing patches, this tool also performs checks on basic security settings and provides information on remediating any issues found. Configure Automatic Updates from the Automatic Updates control panel • On most servers, you should choose either \"Download updates for me, but let me choose when to install them,\" or \"Notify me but don't automatically download or"
                            ],
                            [
                                "4",
                                "install them.\" • The campus Windows Server Update Services server can be used as the source of automatic updates. Configuring the minimum password length settings is important only if another method of ensuring compliance withuniversity password standards is not in place. The Information Resources Use and Security Policy requires passwords be a minimum of 8 characters in"
                            ],
                            [
                                "5",
                                "length. It is h4ly recommended that passwords be at least 14 characters in length (which is also the recommendation of CIS). Longer passwords (e.g., more than 20 characters) offer much more protection (entropy) in the event a password hash is obtained and an attacker is attempting to crack it. Configuring the password complexity setting is important only if another method of ensuring compliance with university password standards is not in place. The Information Resources"
                            ],
                            [
                                "6",
                                "Use and Security Policy requires that passwords contain letters, numbers, and special characters."
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 46,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "If this option is enabled, the system will store passwords using a weak form of encryption"
                            ],
                            [
                                "7",
                                "that is susceptible to compromise. This configuration is disabled by default. Instead of the CIS recommended values, the account lockout policy should be configured as follows: • Account lockout duration — 5 minutes"
                            ],
                            [
                                "8",
                                "• Account lockout threshold — 5 failed attempts • Reset account lockout counter — 5 minutes Any account with this role is permitted to log in to the console. By default, this includes users"
                            ],
                            [
                                "1",
                                "in the Administrators, Users, and Backup Operators groups. It's unlikely that non-"
                            ],
                            [
                                "1",
                                "administrative users require this level of access and, in cases where the server is not physically secured, granting this right may facilitate a compromise of the device."
                            ],
                            [
                                "1",
                                "The text of the university's official warning banner can be found on the ISO's web site. You"
                            ],
                            [
                                "3",
                                "may add localized information to the banner as long as the university banner is included. The use of Microsoft accounts can be blocked by configuring the group policy object at: Computer Configuration\\Windows Settings\\Security Settings\\Local Policies\\"
                            ],
                            [
                                "1",
                                "Security Options\\Accounts: Block Microsoft accounts"
                            ],
                            [
                                "4",
                                "This setting can be verified by auditing the registry key: HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Policies\\System\\N oConnectedUser Logon information for domain accounts can be cached locally to allow users who have previously authenticated to do so again even if a domain controller cannot be contacted. By default 10 accounts will be cached locally, but there is a risk that in the event of a compromise an attacker could locate the cached credentials and use a brute force attack to discover the passwords. Therefore, it is recommended that this value be reduced so that"
                            ],
                            [
                                "4",
                                "fewer credentials will be placed at risk, and credentials will be cached for shorter periods of"
                            ],
                            [
                                "2",
                                "time in the case of devices that are logged into frequently by multiple users. The group policy object below should be set to 4 or fewer logins: Computer Configuration\\Windows Settings\\Security Settings\\Local Policies\\Security Options\\Interactive logon: Number of previous logons to cache (in case domain controller is not available)"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 47,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "The Account Logon audit policy logs the results of validation tests of credentials submitted for user account logon requests. The server that is authoritative for the credentials must have this audit policy enabled. For domain member machines, this policy will only log events for local user accounts. Configure the group policy object below to match the listed audit"
                            ],
                            [
                                "4",
                                "settings:"
                            ],
                            [
                                "3",
                                "Computer Configuration\\Windows Settings\\Security Settings\\ Advanced Audit Policy Configuration\\Audit Policies\\Account Logon\\ • Credential Validation — Success and Failure Configure the group policy object below to match the listed audit settings: Computer Configuration\\Windows Settings\\Security Settings\\ Advanced Audit Policy Configuration\\Audit Policies\\Account Management\\"
                            ],
                            [
                                "4",
                                "• Computer Account Management — Success and Failure"
                            ],
                            [
                                "4",
                                "• Other Account Management Events — Success and Failures • Security Group Management — Success and Failure • User Account Management — Success and Failure Configure the group policy object below to match the listed audit settings: Computer Configuration\\Windows Settings\\Security Settings\\ Advanced Audit Policy Configuration\\Audit Policies\\Logon/Logoff\\ • Account Lockout — Success"
                            ],
                            [
                                "4",
                                ""
                            ],
                            [
                                "5",
                                "• Logoff — Success • Logon — Success and Failure • Other Logon/Logoff Events — Success and Failure • Special Logon — Success Configure the group policy object below to match the listed audit settings:"
                            ],
                            [
                                "4",
                                ""
                            ],
                            [
                                "6",
                                "Computer Configuration\\Windows Settings\\Security Settings\\"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 48,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Advanced Audit Policy Configuration\\Audit Policies\\Policy Change\\ • Audit Policy Change — Success and Failure • Authentication Policy Change — Success Configure the group policy object below to match the listed audit settings: Computer"
                            ],
                            [
                                "4",
                                "Configuration\\Windows Settings\\Security Settings\\ Advanced Audit Policy"
                            ],
                            [
                                "7",
                                "Configuration\\Audit Policies\\Privilege Use\\ · Sensitive Privilege Use — Success and Failure The university requires the following event log settings instead of those recommended by the CIS Benchmark: • Application: Maximum log size — 32,768 KB • Security: Maximum log size — 196,608 KB • Setup: Maximum log size — 32,768 KB • System: Maximum log size — 32,768 KB The recommended retention method for all logs is: Overwrite events older than 14 days These are minimum requirements. The most important log here is the security log. 100 MB is"
                            ],
                            [
                                "4",
                                "a suggested minimum, but if you have a high-volume service, make the file as large as"
                            ],
                            [
                                "8",
                                "necessary to make sure at least 14 days of security logs are available. You may increase the number of days that you keep, or you may set the log files to not overwrite events. Note that if the event log reaches its maximum size and no events older than the number of days you specified exist to be deleted, or if you have disabled overwriting of events, no new events will be logged. This may happen deliberately as an attempt by an attacker to cover his tracks. For critical services working with Cat 1 or other sensitive data, you should use Syslog, Splunk, Intrust, or a similar service to ship logs to another device. Another option is to configure Windows to rotate event log files automatically when an event log reaches its maximum size as described in the article http://support.microsoft.com/kb/312571 using the AutoBackupLogFiles registry entry. It is highly recommended that logs are shipped from any Category I devices to a service like Splunk, which provides log aggregation, processing, and real-time monitoring of events"
                            ],
                            [
                                "4",
                                "among many other things. This helps to ensure that logs are preserved and unaltered in the"
                            ],
                            [
                                "9",
                                "event of a compromise, in addition to allowing proactive log analysis of multiple devices. The ISO maintains a centrally-managed Splunk service that may be leveraged. Please see the on- boarding form for more details."
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 49,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "Configure user rights to be as secure as possible, following the recommendations in section"
                            ],
                            [
                                "5",
                                "2.2 of the CIS benchmark. Every attempt should be made to remove Guest, Everyone, and"
                            ],
                            [
                                "2",
                                "ANONYMOUS LOGON from the user rights lists. Volumes formatted as FAT or FAT32 can be converted to NTFS, by using the convert.exe utility provided by Microsoft. Microsoft has provided instructions on how to perform the conversion."
                            ],
                            [
                                "5",
                                ""
                            ],
                            [
                                "3",
                                "Windows servers used with Category I data must use the NTFS file system for all partitions where Category I data is to be stored."
                            ],
                            [
                                "5",
                                "Be extremely careful, as setting incorrect permissions on system files and folders can"
                            ],
                            [
                                "4",
                                "render a system unusable."
                            ],
                            [
                                "5",
                                "Be extremely careful, as setting incorrect permissions on registry entries can render a"
                            ],
                            [
                                "5",
                                "system unusable. Some remote administration tools, such as Microsoft Systems Management Server, require remote registry access to managed devices. Disabling remote registry access may cause such services to fail. If remote registry access is not required, it is recommended that the remote registry service be stopped and disabled. If remote registry access is required, the remotely accessible registry paths should still be configured to be as restrictive as possible. The group policy object below controls which registry paths are available remotely:Computer Configuration\\Windows Settings\\Security Settings\\Local Policies\\Security Options\\Network access: Remotely accessible registry pathsThis object should be set to allow access only to:"
                            ],
                            [
                                "5",
                                ""
                            ],
                            [
                                "6",
                                "• System\\CurrentControlSet\\Control\\ProductOptions • System\\CurrentControlSet\\Control\\Server Applications • Software\\Microsoft\\Windows NT\\CurrentVersion Further restrictions on the registry paths and subpaths that are remotely accessible can be configured with the group policy object: Computer Configuration\\Windows Settings\\Security Settings\\Local Policies\\ Security Options\\Network access: Remotely accessible registry paths and sub-paths"
                            ]
                        ]
                    }
                ]
            },
            {
                "page": 50,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "By default, domain members synchronize their time with domain controllers using Microsoft's Windows Time Service. The domain controller should be configured to"
                            ],
                            [
                                "5",
                                "synchronize its time with an external time source, such as the university's network time"
                            ],
                            [
                                "7",
                                "servers. ITS Networking operates two stratum 2 NTPv4 (NTP version 4) servers for network time synchronization services for university network administrators. ISO provides Cisco AMP, a managed, cloud-based malware protection service, free of charge"
                            ],
                            [
                                "5",
                                "for all university-owned devices. More information about obtaining and using AMP is"
                            ],
                            [
                                "8",
                                "at https://security.utexas.edu/education-outreach/anti-virus. Anti-spyware software is only required to be installed if the server is used to browse Web sites not specifically related to the administration of the server, which is not recommended."
                            ],
                            [
                                "5",
                                "At a minimum, SpyBot Search and Destroy should be installed. Consider installing a"
                            ],
                            [
                                "9",
                                "secondary anti-spyware application, such as SpyWare Blaster, EMS Free Surfer, or AdAware. An additional measure that can be taken is to install Firefox with the NoScript and uBlock add-ons. Cisco AMP is the recommended anti-virus solution. Microsoft Forefront may also be used,"
                            ],
                            [
                                "6",
                                "and can be configured directly or through the use of GPOs, which can simplify the"
                            ],
                            [
                                "0",
                                "management of multiple servers. Spyware Blaster - Enabling auto-update functionality requires the purchase of an additional subscription. SpyBot Search and Destroy - Automatic update tasks can be created inside the program itself and are scheduled using the Windows Task Scheduler. 1. In the Spybot Application, click on Mode --> Advanced View. 2. Click Settings on the left"
                            ],
                            [
                                "6",
                                "hand side of the window."
                            ],
                            [
                                "1",
                                "3. You should now see an option labeled \"Scheduler.\" Select that option. 4. Adding the task to update automatically is relatively straightforward. o Click Add to create a task. o Click Edit to edit the task schedule. o In the Scheduled Task window that pops up, enter the following In the Run field: § C:\\Program Files\\Spybot - Search & Destroy\\SpybotSD.exe\" /AUTOUPDATE /TASKBARHIDE /AUTOCLOSE o Click the Schedule tab and choose a time for it to update. The duration of the update is"
                            ]
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "ah15",
        "code": "AH15",
        "title": "Data Security Policy",
        "pages": [
            {
                "page": 51,
                "blocks": [
                    {
                        "type": "table",
                        "rows": [
                            [
                                "",
                                "very brief, but it is processor intensive, so consider scheduling it to occur during periods of low usage. The task should be scheduled daily. Windows provides the Encrypting File System as a built-in mechanism to allow the encryption of individual users' files and folders. Be aware of the caveats involved in the use of EFS before implementing it for general use, though. Other options such as PGP and GNUPG also exist."
                            ],
                            [
                                "6",
                                "Another encryption option to consider is whole-disk encryption, which encrypts the entire"
                            ],
                            [
                                "2",
                                "contents of the drive instead of just specific files and folders. Windows comes with BitLocker for this. If encryption is being used in conjunction with Category I data, one of the solutions listed in the Approved Encryption Methods (EID required) must be implemented. Windows has a feature called Windows Resource Protection which automatically checks certain key files and replaces them if they become corrupted. It is enabled by default. You"
                            ],
                            [
                                "6",
                                "can audit in much more in depth using Tripwire. Modern versions of Tripwire require the"
                            ],
                            [
                                "3",
                                "purchase of licenses in order to use it. The Tripwire management console can be very helpful for managing more complex installations. This setting is configured by group policy object at: Computer Configuration\\Administrative Templates\\Windows Components\\Remote Desktop Services\\Remote Desktop Session Host\\Security This policy object should be configured as below:"
                            ],
                            [
                                "6",
                                ""
                            ],
                            [
                                "4",
                                "• Set client connection encryption level — High • Require use of specific security layer for remote (RDP) connections — SSL (TLS 1.0) • Require user authentication for remote connections by using Network Level Authentication — Enabled 1. Open the Display Properties control panel. 2. Select the Screen Saver tab."
                            ],
                            [
                                "6",
                                "3. Select a screen saver from the list. Although there are several available, consider using a"
                            ],
                            [
                                "9",
                                "simple one such as \"Blank.\" 4. The value for Wait should be no more than 15 minutes. 5. Select the On resume, password protect option."
                            ]
                        ]
                    },
                    {
                        "type": "text",
                        "value": "AH15: Data Security Policy\nIntroduction"
                    }
                ]
            },
            {
                "page": 52,
                "blocks": [
                    {
                        "type": "text",
                        "value": "With each new piece of technology comes new potential for data security breach. The\ndangers inherent in using a smartphone or tablet are quite different from those\nassociated with a laptop. Even the convenience of wireless internet has more opportunities for\nattack than traditional hard-wired systems. While most security measures focus on external\nthreats from hackers and malicious downloads, internal threats account for twice as much\nmonetary loss as external threats. An internal threat could be the deletion or dissemination of\ncomputer files related to a client’s case. One employee could also share their password with\nanother, granting someone access beyond the scope of their position. To prevent the\nintentional or unintentional problems created by employee use of software and equipment,\ndeveloping a thorough data securities policy is more important than ever. This policy should\nprovide employees with information regarding the acceptable use of mobile technology as well\nas password security and wireless access policies to protect confidential data. While most\nsecurity measures focus on external threats from hackers and malicious downloads, internal\nthreats account for twice as much monetary loss as external threats.\nElements of a data security policy\nA law firm depends on protecting confidential client information. Most of this information is\navailable in electronic format for accessibility in and out of the office. Preventing client\ninformation from mysteriously growing legs or disappearing is crucial to a law firm’s well-being.\n11 Office Computers and Server\nThere are some truths that should be self-evident but need to be spelled out in a written policy,\nbecause inevitably an employee will otherwise do the unthinkable. Some may ignore the Not\nSafe for Work (NSFW) tag and view pornography if they are ‘off the clock’ during a break or\nlunch hour, while others may decide to run a personal business or game server using the firm’s\nservers. Both of these activities expose the office to security risks. Some less obvious but\nequally risky behavior is the desire to download software from the internet onto company\ncomputers and/or servers. An employee could simply be looking for a tool to make them more\nefficient in their job. However, looking in the wrong place and downloading the wrong file could\ninstall malicious software onto your system. Perhaps the scariest danger is the easiest one to\ncomplete: deleting files. Deleting a file can sometimes be as simple as hitting the wrong key\ncombination, resulting in a mad dash to the IT specialist with the order to “retrieve!” said file\nfrom the trash bin. On those occasions that the deletion wasn’t noticed right away, IT can spend\na significant amount of time with the backup locating the document to hopefully restore it. To\nprevent these and other related computer and server nightmares, create an acceptable use\npolicy as part of your data security package. Restrict who has the right to download executable\nfiles (programs) and who can modify items in certain folders. Firewalls, virus scan and anti-\nspam software should be installed, updated and the system regularly scanned. DATA-SECURITY"
                    }
                ]
            },
            {
                "page": 53,
                "blocks": [
                    {
                        "type": "text",
                        "value": "TIPS Create an acceptable use policy as party of your data security package. Restrict who can\ndownload files. Make sure you have virus scan and anti-spam software installed.\nSecure Backups\nIs losing a day’s worth of work acceptable, let alone a week? Backing up the office servers every\nnight and storing that data off-site can save a law firm. Disasters don’t wait for you to be\nprepared before they strike. Servers, like other computers, can die without warning. Having a\nfull backup available allows you to upload your data onto a new server (after a new server is\nacquired and built) and continue working without having to reinvent lost work. It’s even better\nwhen you have a redundant system, and you can simply switch to your backup server and\ncontinue on as if nothing has happened. There are different varieties of backup systems\navailable. Cloud backups remove the need for equipment but require extra vigilance regarding\nsecurity when selecting a company. USB backups give the convenience of a portable backup, but\nproper security must be maintained since they are small and easily lost. Older tape backups\nrequire special equipment, someone diligently managing the process, and secure storage.\nDATA SECURITY TOOLKIT\nWhen planning your backup system, budget may be a factor in deciding which route you take.\nHowever, you have to pick a system you will use. Saving money isn’t a value if it’s tedious work\nthat never actually gets done and you don’t have a current backup when you need it. Your\nbackup policy should include determination for how long backup copies will be kept. Additional\nUSB drives can be purchased to maintain offsite backups. If using the tape system, have a series\nof tapes that you rotate. Because tapes deteriorate, replace them on a regular basis to prevent\nproblems. Keeping end of month or end of year backups offsite may be helpful as well.\nPassword Security\nRecent headlines highlight the continued problem of creating simple passwords that are quickly\nhacked because they are easier to remember. If a site requires a complicated password, some\npeople will write it down and attach the post-it note to their computer so they have easy access\nto it when they need it. Others save a document in the system with their list of passwords to\nvarious sites. Any of these methods are hazards that can provide unauthorized access to your\nsystem. To combat the dangers of password accessibility, provide minimum requirements of at\nleast eight characters and combinations of the following: lowercase letters, uppercase letters,\nnumbers, and special characters. Simple common words or the individual’s name and date of\nbirth should be prohibited. Provide some examples of possible h4 passwords that would be easy\nto remember, such as word combinations (previous addresses: Main#202ParkDrive). Passwords\nshould be scheduled to be changed on a regular basis, and passwords should not be able to be\nused over and over again in succession. In addition to making sure individual passwords are"
                    }
                ]
            },
            {
                "page": 54,
                "blocks": [
                    {
                        "type": "text",
                        "value": "truly secure, be sure that the system passwords for wireless access and other equipment are\nalso changed. These hidden passwords can open up the entire system to hackers even if you\nthink you’ve created a secure system with layers of access.\ninternet use\nPreventing employees from ever surfing to a non- work-related website can be cost prohibitive\nfor small and medium sized firms. However, having a clear internet use policy can help limit the\ntypes of sites they visit. Streaming music and video use a lot of bandwidth, and\ndownloaded files from file sharing sites can contain malware or expose the firm to\nliability if material was copyrighted. Some employees may be tempted to spend too much time\non activities such as online shopping, social media or travel planning, Again, use the theory that\nif it isn’t forbidden, they will do it. Specifically list any types of sites that you do not want your\nemployees visiting on your office computer. Security settings can be set to block porn sites,\ngambling sites, social media and even web- based email sites\nDATA -SECURITY TIPS.\nMake sure you have a clear internet use policy which can limit the types of sites your\nemployees visit. Streaming music and video uses a lot of bandwidth and downloading files can\nexpose you to malware or copyright issues.\nRisk Management Practice Guide of Lawyers\nThe logic behind blocking personal, web-based email is prevention of employees from opening\nemails and visiting a nefarious site or opening an infected attachment, thereby compromising\nyour system because their personal email was not as secure. Employees may inadvertently or\nmaliciously transmit client confidential or law firm proprietary information using their personal\nwebmail, circumventing other safeguards the firm has established concerning such information.\nRemind employees that, like email, browsing history is subject to being reviewed.\nE-mail\nMisuse of company email is one of the most common problems faced, and covers a large variety\nof actions. Sending a free “Happy Birthday!” card from a free website can introduce massive\nspamming into your system and bog down your server. Employees may use company e-mail for\nrunning a personal business with less thought than storing hard files on the computers or\nservers. A good Samaritan employee may send out emails to everyone in the firm regarding a\nfundraising event for a local charity, and follow up with four or five reminders. Personal use of\nthe firm email system should be addressed to reduce the amount of server space such items\nconsume. E-mail policies should also include limits on the size of attachments as appropriate.\nConsider this: an e-mail with a 10MB attachment is received and then forwarded to ten other"
                    }
                ]
            },
            {
                "page": 55,
                "blocks": [
                    {
                        "type": "text",
                        "value": "employees. This attachment now consumes 120MB of server space as each individual copy of\nthe e-mail is stored on the server, plus the copy in the sent folder. Depending on your e-mail\nclient, a copy of the e-mail may also be stored on each and every computer. The above space\nconsumption issue illustrates the reasoning behind another policy: e-mail retention policy. Case-\nrelated e-mails and attachments should be uploaded into a practice management system or\ndatabase, protecting them from accidental deletion and making them accessible to all\nemployees who may need the information. Storing emails that need to be saved outside of the\ne-mail system also prevents the dreaded moment when the recipient is out of the office and IT\nhas to search their e-mail so another employee can access the information. An essential\nelement of an e-mail policy is reminding employees that the office email system is firm property\nand not their personal account. As such, any office email account is subject to review. Remind\nemployees that office e-mail is representative of the firm and should present a professional\nimage.\nMetadata\nPerhaps the most overlooked data security danger is metadata contained in document editing\nprograms. Both Microsoft Word and WordPerfect contain information regarding previous edits\nmade to a document. This means that deleting confidential information from one client\ndocument to reuse for another could expose the former client’s information to the latter if the\nrecipient knows where to look. These features can be turned off, preventing data from being\nstored in the first place. Files sent electronically should be scrubbed for metadata. Special\nprograms can be purchased to ensure that this information is not forwarded along with your\ndocument and can be integrated into your email system. If you do not want the recipient to\nmake changes to your document, send the document as a PDF. Sending as a PDF strips most of\nthe metadata from a file, but a PDF contains some of its own. Be sure to adjust the security\noptions as appropriate.\nRemote access\nEmployees may need to access the firm’s system when they are out of the office occasionally.\nProhibiting employees from using public computers or using wireless access in public places\nremoves the exposure of client data from hackers because security settings in these\ncircumstances are often lower than those created for the office. To make connecting to the\noffice more secure, consider establishing a virtual private network (VPN). A VPN connects you to\nyour office computer over the internet, alleviating the need to actually access files through a\nquestionable internet connection. Communications sent through the VPN are encrypted, so any\ndata intercepted would not be usable.\nSmartphones, Tablets and Remote Storage Devices"
                    }
                ]
            },
            {
                "page": 56,
                "blocks": [
                    {
                        "type": "text",
                        "value": "The trickiest part of data security is protecting the mobile data that leaves the building.\nSmartphones and tablets all contain internet connections but often do not have all of their\nsecurity measures activated as a firm laptop would provide. A USB drive often contains pure,\nunencrypted files available for anyone who plugs the drive into their computer; worse yet, it is\nsmall enough to easily lose. Any device used to access client data should have password\nprotection requirements. Even a USB device can be purchased that requires password access.\nFor smartphones and tablets, require passwords at start up and after a period of idle time. Also,\ndevelop a remote wipe program protocol should any device ever be lost or stolen. Any\ndocument downloaded and stored should be encrypted. When travelling, be careful not to\nleave your device in ‘airplane mode as this often disables the ability to enact a remote wipe\nprogram as it disconnects the device from data systems used to locate it. Upon return to the\noffice, require that remote storage devices such as USB and flash drives be scanned by virus\nand malware scanners to prevent infection from any outside sources. Have protocols in place\nregarding the use of personal USB devices with office computers to avoid inadvertently infecting\noffice computers with unprotected devices. Consider restricting access to USB ports to certain\nemployees, or even disable ports to prevent misuse.\nThe trickiest part of data security is protecting the mobile data that leaves the building.\nSmartphones and tablets all contain internet connections but often do not have all of their\nsecurity measures activated as a firm laptop would provide.\nWhen an employee Leaves\nOften the biggest threat to your data is within your own company. A disgruntled or exiting\nemployee can easily delete files from your system or take files out of the office without notice.\nLocking down data from employees can be the hardest part of data security. When an\nemployee leaves, immediately lock their computer, e-mail, remote access and any other access\nprivilege to prevent them from accessing information. Create protocols within the firm for who\nmay need to access an employee’s files. If the employee has any equipment, such as a laptop or\nUSB drive, at home, verify that it is returned before they exit the premises on their final\nday. Visitors and Contractors From time to time, office visitors may need to use office\ncomputers or email. Any temporary account established should have a notice regarding\nexpectation of privacy. Passcodes for these accounts should also expire immediately after use.\nThis ensures someone temporarily allowed into your system won’t be able to access your\nconfidential data later, when you’re not looking. System contractors obviously need access to\nkeep everything up-to-date and running smoothly. However, they may not understand the\nimportance of the confidentiality of the information they may access in the process of"
                    }
                ]
            },
            {
                "page": 57,
                "blocks": [
                    {
                        "type": "text",
                        "value": "completing their work. A Vendor/ Contractor Confidentiality Agreement should be completed\nby all of those who will be accessing your system to ensure that confidentiality is maintained.\nSecurity Audit\nTo ensure all facets of your system are properly secure, consider a third party security audit. A\ntrained professional will see any holes in your protection that could leak confidential\ninformation. The auditor will be able to provide you with suggestions to improve your security\nto prevent data security breaches in the future. This may include the purchase of additional\nsecurity software, or simply changing internet usage habits. The end result will be a safer\npractice.\nSample Policy Table of Contents\nOverview\nPurpose\nScope\nNetwork/Server Security\nServer Configuration Guidelines\nSecurity-related Events\nRouter Security\nServer Malware Protection\nBackup Procedures\nWorkstation Security\nAuthorized Users\nSafeguards\nSoftware Installation\nMalware Protection\nPassword Security\nRequirements\nStandards\nProtective Measures\nPassphrases"
                    }
                ]
            },
            {
                "page": 58,
                "blocks": [
                    {
                        "type": "text",
                        "value": "Acceptable Use\nGeneral Use and Ownership Security and Proprietary Information Unacceptable Use\nWireless\nEncryption\nStandards\nMobile Device Encryption\nE-mail\nProhibited Use\nPersonal Use\nE-mail Retention\nMonitoring\nMetadata\nDefinition.\nRemoving Metadata\nRemote access\nPersons Affected General Standards Requirements\nMobile Computing and Storage Devices\nVirtual Private Network (VPN) Employee Termination Removing access\nReturning mobile devices Visitor and Contractor Access Permission\nContractors Remote Access Enforcement\nOVER VIEW\n1. Purpose - <Firm Name> is entrusted with the responsibility to provide professional legal\nadvice to clients who provide us with confidential information. Inherent in this\nresponsibility is an obligation to provide appropriate protection against theft of data and\nmalware threats, such as viruses and spyware applications. The purpose of this policy is\nto establish standards for the base configuration of equipment that is owned and/or\noperated by <Firm Name> or equipment that accesses <Firm Name>’s internal systems."
                    }
                ]
            },
            {
                "page": 59,
                "blocks": [
                    {
                        "type": "text",
                        "value": "Effective implementation of this policy will minimize unauthorized access to <Firm\nName> proprietary information and technology and protect confidential client\ninformation.\n2. Scope - This policy applies to equipment owned and/or operated by <Firm Name>, and\nto employees\nconnecting to any <Firm Name>-owned network domain.NETWORK/SERVER SECURITY\n1. Server Configuration Guidelines\n2. the most recent security patches must be installed on the system as soon as practical,\nthe only exception\nbeing when immediate application would interfere with business requirements.\n1. Servers should be physically located in an access-controlled environment.\niii. Servers are specifically prohibited from being operated from uncontrolled cubicle areas.\n1. Security-related Events - Security-related events will be reported to the It management.\nCorrective measures will be prescribed as needed. Security-related events include, but\nare not limited to:\n2. Port-scan attacks\n3. Evidence of unauthorized access to privileged accounts\niii. Anomalous occurrences that are not related to specific applications on the host.\n1. Router Security\n2. the enable password on the router must be kept in a secure encrypted form. the router\nmust have the\nenable password set to the current production router password from the router’s support\norganization.\n1. Disallow the following:\n2. IP directed broadcasts\n3. Incoming packets at the router sourced with invalid addresses such as RFC1918 address\n4. TCP small services\n5. UDP small services"
                    }
                ]
            },
            {
                "page": 60,
                "blocks": [
                    {
                        "type": "text",
                        "value": "6. All source routing\n7. Web services running on router\niii. Access rules are to be added as business needs arise.\n1. Each router must have the following statement posted in clear view: “Unauthorized\nACCESS to THIS Network DEVICE IS Prohibited. You must have explicit permission to\naccess or configure this device. All activities performed on this device may be logged,\nand violations of this policy may result in disciplinary action, and may be reported to law\nenforcement. there is no right to privacy on this device.”\n2. Server Malware Protection\n3. Anti-Virus - All servers MUST have an anti-virus application installed that offers real-time\nscanning protection to files and applications running on the target system if they meet\none or more of the following conditions:\n4. Non-administrative users have remote access capability\n5. The system is a file server\n6. Share access is open to this server from systems used by non-administrative users\n7. HTTP/FTP access is open from the Internet\nOther “risky” protocols/applications are available to this system from the Internet at the\ndiscretion of the <Firm Name> IT department.\n1. Mail Server Anti-Virus - If the target system is a mail server it MUST have either an\nexternal or internal anti-virus scanning application that scans all mail destined to and\nfrom the mail server. Local anti-virus scanning applications MAY be disabled during\nbackups if an external anti-virus application still scans inbound e-mails while the backup\nis being performed.\niii. Anti-Spyware - All servers MUST have an anti-spyware application installed that offers real-\ntime protection to the target system if they meet one or more of the following conditions:\n1. Any system where non-technical or non-administrative users have remote access to the\nsystem and ANY outbound access is permitted to the Internet\n2. Any system where non-technical or non-administrative users have the ability to install\nsoftware on their own\n3. Notable Exceptions - Exceptions to above requirements may be deemed acceptable with\nproper documentation if one of the following notable conditions applies to this system:"
                    }
                ]
            },
            {
                "page": 61,
                "blocks": [
                    {
                        "type": "text",
                        "value": "4. the system is a SQL server\n5. the system is used as a dedicated mail server\n6. the system is not a Windows based platform\n7. backup Procedures\n8. Daily backups - backup software shall be scheduled to run nightly to capture all data\nfrom the previous day.\n9. backup logs are to be reviewed to verify that the backup was successfully completed.\n10. One responsible party should be available to supervise backups each day. If the\ndesignated backup specialist is not available, an alternative should be named to oversee\nthe process.\n11. Backup data storage shall not be on the <Firm Name>’s premises. In case of a disaster,\nbackup tapes\nshould be available for retrieval and not subject to destruction. iii. Data on hard drives will be\nbacked up daily, and mobile devices shall be brought in to be backed up on a weekly basis or as\nsoon as practical if on an extended travel arrangement.\n1. test restoration process regularly and create written instructions in the event It\npersonnel are not available to restore data when needed.\nIII. work Station Security\n1. Authorized Users - Appropriate measures must be taken when using workstations to\nensure the confidentiality, integrity and availability of sensitive information is restricted\nto authorized users.\n2. Safeguards - <Firm Name> will implement physical and technical safeguards for all\nworkstations that access\nelectronic confidential information to restrict access to authorized users. Appropriate measures\ninclude:\n1. Restricting physical access to workstations to only authorized personnel.\n2. Securing workstations (screen lock or logout) prior to leaving area to prevent\nunauthorized access.\niii. Enabling a password-protected screen saver with a short timeout period to ensure that\nworkstations that were left unsecured will be protected."
                    }
                ]
            },
            {
                "page": 62,
                "blocks": [
                    {
                        "type": "text",
                        "value": "1. Complying with all applicable password policies and procedures.\n2. Ensuring workstations are used for authorized business purposes only vi. Never\ninstalling unauthorized software on workstations.\nvii. Storing all confidential information on network servers. viii. Keeping food and drink away\nfrom workstations in order to avoid accidental spills.\n1. Securing laptops that contain sensitive information by using cable locks or locking\nlaptops up in drawers or cabinets.\n1. Complying with the Portable Workstation Encryption policy.\n2. Complying with the Anti-Virus policy.\nxii. Ensuring that monitors are positioned away from public view. If necessary, install privacy\nscreen filters or other physical barriers to public viewing. xiii. Ensuring workstations are left on\nbut logged off in order to facilitate after-hours updates. Exit running applications and close\nopen documents. xiv. Ensuring that all workstations use a surge protector (not just a power\nstrip) or a UPS (battery backup). xv. If wireless network access is used, ensure access is secure\nby following the Wireless Access policy.\n1. Software Installation\n2. Employees may not install software on <Firm Name’s> computing devices operated\nwithin the <Firm Name> network. Software requests must first be approved by the\nrequester’s manager and then be made to the It department in writing or via e-mail.\nSoftware must be selected from an approved software list, maintained by the IT\ndepartment, unless no selection on the list meets the requester’s need. The IT\ndepartment will obtain and track the licenses, test new software for conflict and\ncompatibility, and perform the installation.\n3. This policy covers all computers, servers, and other computing devices operating within\n<Firm Name>’s\nnetwork.\n1. Malware Protection\n2. Anti-Virus - All <Firm Name> computers must have <Firm Name>’s standard, supported\nanti-virus software installed and scheduled to run at regular intervals. In addition, the\nanti-virus software and the virus pattern files must be kept up-to-date. Virus-infected\ncomputers must be removed from the network until they are verified as virus-free. Any"
                    }
                ]
            },
            {
                "page": 63,
                "blocks": [
                    {
                        "type": "text",
                        "value": "activities with the intention to create and/or distribute malicious programs into <Firm\nName>’s networks (e.g., viruses, worms, Trojan horses, e-mail bombs, etc.) are\nprohibited, in accordance with the Acceptable Use policy.\n1. PASSWORD SECURITY\n2. Requirements\n3. All system-level passwords (Administrator, etc.) must be changed on a quarterly basis, at\na minimum.\n4. All user-level passwords (e.g., email, web, desktop computer, etc.) must be changed at\nleast every six months.\niii. All user-level and system-level passwords must conform to the standards described below.\n1. Standards - All users at <Firm Name> should be aware of how to select strong\npasswords. Strong passwords have the following characteristics:\n2. Contain at least three of the five following character classes:\n3. Lower case characters\n4. Upper case characters\n5. Numbers\n6. Punctuation\n7. “Special” characters (e.g. @#$%^&*()_+|~-=\\`[]:”;’<>/ etc.)\n8. Contain at least eight to fifteen alphanumeric characters.\niii. the password is NOT a word found in a dictionary (English or foreign).\n1. the password is NOT a common usage word such as:\n2. Computer terms and names, commands, sites, companies, hardware, software.\nPasswords should NEVER be “Password1” or any derivation.\n3. the words “<Firm Name>”, “<City>”, or any derivation.\n4. Names of family, pets, friends, co-workers, etc.\n1. birthdays and other personal information such as addresses and phone numbers."
                    }
                ]
            },
            {
                "page": 64,
                "blocks": [
                    {
                        "type": "text",
                        "value": "2. Word or number patterns like aaabbb, qwerty, zyxwvuts, 123321, etc.\n3. Any of the above spelled backwards.\n4. Any of the above preceded or followed by a digit (e.g., secret1, 1secret).\n5. try to create passwords that can be easily remembered. One way to do this is create a\npassword based on\na song title, affirmation, or other phrase.\n1. Protective Measures\n2. Do not share <Firm Name> passwords with anyone, including administrative assistants\nor secretaries. All\npasswords are to be treated as sensitive, confidential <Firm Name> information.\n1. Passwords should never be written down or stored on-line without encryption.\niii. Do not reveal a password in email, chat, or other electronic communication.\n1. Do not speak about a password in front of others.\n2. Do not hint at the format of a password (e.g., “my family name”).\n3. Do not reveal a password on questionnaires or security forms.\nvii. If someone demands a password, refer them to this document and direct them to the It\nDepartment. viii. Always decline the use of the “Remember Password” feature of applications.\n1. Passphrases - Access to the <Firm Name> Networks via remote access is to be controlled\nusing either a one- time password authentication or a public/private key system with a\nstrong passphrase.\n2. A good passphrase is relatively long and contains a combination of upper and lowercase\nletters and numeric and punctuation characters. An example of a good passphrase:\n“Joe&Me1Rbudz”\n3. All of the rules above that apply to passwords apply to passphrases.\nACCEPTABLE USE\n1. General Use and Ownership\n2. While <Firm Name>’s network administration desires to provide a reasonable level of\nprivacy, users should be aware that the data they create on the corporate systems\nremains the property of <Firm Name>."
                    }
                ]
            },
            {
                "page": 65,
                "blocks": [
                    {
                        "type": "text",
                        "value": "3. Any information that users consider sensitive or vulnerable be encrypted.\niii. For security and network maintenance purposes, authorized individuals within <Firm Name>\nmay monitor equipment, systems and network traffic at any time.\n1. Security and Proprietary Information\n2. The user interface for information contained on <Firm Name>’s systems should be\nclassified as either confidential or not confidential, as defined by corporate\nconfidentiality guidelines. Employees should take all necessary steps to prevent\nunauthorized access to this information.\n3. Keep passwords secure and do not share accounts. Authorized users are responsible for\nthe security of their passwords and accounts. System level passwords should be changed\nquarterly, user level passwords should be changed every six months.\niii. All PCs, laptops and workstations should be secured with a password-protected screensaver\nwith the automatic activation feature set at 10 minutes or less, or by logging-off when\nunattended.\n1. All PCs, laptops and workstations used by the employee that are connected to the <Firm\nName> network, whether owned by the employee or <Firm Name>, shall be continually\nexecuting approved virus-scanning software with a current virus database unless\noverridden by departmental or group policy.\n2. Employees must use extreme caution when opening e-mail attachments received from\nunknown senders, which may contain viruses, e-mail bombs, or trojan horse code.\nUnacceptable Use\n1. the following activities are, in general, prohibited. the lists below are by no means\nexhaustive, but\nattempt to provide a framework for activities which fall into the category of unacceptable use.\n1. Under no circumstances is an employee of <Firm Name> authorized to engage in any\nactivity that is illegal under local, state, federal or international law while utilizing <Firm\nName>-owned resources.\n2. Violations of the rights of any person or Firm protected by copyright, trade secret,\npatent or other intellectual property, or similar laws or regulations, including, but not\nlimited to, the installation or distribution of “pirated” or other software products that\nare not appropriately licensed for use by\n<Firm Name>."
                    }
                ]
            },
            {
                "page": 66,
                "blocks": [
                    {
                        "type": "text",
                        "value": "1. Unauthorized copying of copyrighted material including, but not limited to, digitization\nand distribution of photographs from magazines, books or other copyrighted sources,\ncopyrighted music, and the installation of any copyrighted software for which <Firm\nName> or the end user does not have an active license is strictly prohibited.\n2. Exporting software, technical information, encryption software or technology, in\nviolation of international or regional export control laws, is illegal. the appropriate\nmanagement should be consulted prior to export of any material that is in question.\n3. Introduction of malicious programs into the network or server (e.g., viruses, worms,\ntrojan horses, e-mail bombs, etc.).\n4. Revealing your account password to others or allowing use of your account by others.\nthis includes family and other household members when work is being done at home\n5. Using a <Firm Name> computing asset to actively engage in procuring or transmitting\nmaterial that\nis in violation of sexual harassment or hostile workplace laws in the user’s local jurisdiction.\n1. Making fraudulent offers of products, items, or services originating from any <Firm\nName> account.\n2. Effecting security breaches or disruptions of network communication. Security breaches\ninclude, but are not limited to, accessing data of which the employee is not an intended\nrecipient or logging into a server or account that the employee is not expressly\nauthorized to access, unless these duties are within the scope of regular duties. For\npurposes of this section, “disruption” includes, but is not limited to, network sniffing,\npinged floods, packet spoofing, denial of service, and forged routing information for\nmalicious purposes.\n3. Port scanning or security scanning is expressly prohibited unless prior notification to the\nIT\ndepartment is made.\n1. Executing any form of network monitoring which will intercept data not intended for the\nemployee’s host, unless this activity is a part of the employee’s normal job/duty.\n2. Circumventing user authentication or security of any host, network or account\n3. Interfering with or denying service to any user other than the employee’s host (for\nexample, denial of\nservice attack)"
                    }
                ]
            },
            {
                "page": 67,
                "blocks": [
                    {
                        "type": "text",
                        "value": "1. Using any program/script/command, or sending messages of any kind, with the intent to\ninterfere\nwith, or disable, a user’s terminal session, via any means, locally or via the Internet.\n1. Providing information about, or lists of, <Firm Name> employees to parties outside\n<Firm Name>.\n2. Wireless Access\n3. <Firm Name> Device Requirements - All wireless devices that reside at a <Firm Name>\nsite and\nconnect to a <Firm Name> network must:\n1. be installed, supported, and maintained by the It department.\n2. Use <Firm Name> approved authentication protocols and infrastructure.\n3. Use <Firm Name> approved encryption protocols.\n4. Maintain a hardware address (MAC address) that can be registered and tracked.\nDATA SECURITY TOOLKIT Home Wireless Device Requirements\n1. Wireless devices that provide direct access to the <Firm Name> corporate network, must\nconform to the security protocols as detailed for <Firm Name> wireless devices.\n2. Wireless devices that fail to conform to security protocols must be installed in a manner\nthat prohibits direct access to the <Firm Name> corporate network. Access to the <Firm\nName> corporate network through this device must use standard remote access\nauthentication.\n1. ENCRYPTION\n2. Standards - Proven, standard algorithms should be used as the basis for encryption\ntechnologies. these algorithms represent the actual cipher used for an approved\napplication. Key lengths must be at least 128 bits.\n<Firm Name>’s key length requirements will be reviewed annually and upgraded as technology\nallows.\n1. Mobile Device Encryption"
                    }
                ]
            },
            {
                "page": 68,
                "blocks": [
                    {
                        "type": "text",
                        "value": "2. Scope - All mobile devices containing stored data owned by <Firm Name> must use an\napproved method of encryption to protect data at rest. Mobile devices are defined to\ninclude laptops, tablets, and smartphones.\n3. Laptops - Laptops must employ full disk encryption with an approved software\nencryption package. No\n<Firm Name> data may exist on a laptop in clear text. iii. tablet and smartphones - Any <Firm\nName> data stored on a smartphone or tablet must be saved to an encrypted file system using\n<Firm Name>-approved software. <Firm Name> shall also employ remote wipe technology to\nremotely disable and delete any data stored on a <Firm Name> tablet or smartphone which is\nreported lost or stolen.\n1. Keys - All keys used for encryption and decryption must meet complexity requirements\ndescribed in\n<Firm Name>’s Password Security policy. VII. E-MAIL\n1. Prohibited Use - <FIRM NAME> e-mail system shall not to be used for the creation or\ndistribution of any disruptive or offensive messages, including offensive comments\nabout race, gender, hair color, disabilities, age, sexual orientation, pornography, religious\nbeliefs and practice, political beliefs, or national origin. Employees who receive any e-\nmails with this content from any <FIRM NAME> employee should report the matter to\ntheir supervisor immediately. the following activities are strictly prohibited, with no\nexceptions:\n2. Sending unsolicited e-mail messages, including the sending of “junk mail” or other\nadvertising material to\nindividuals who did not specifically request such material (e-mail spam).\n1. Any form of harassment via e-mail, telephone or paging, whether through language,\nfrequency, or size of\nmessages. iii. Unauthorized use, or forging, of e-mail header information.\n1. Solicitation of e-mail for any other e-mail address, other than that of the poster’s\naccount, with the intent\nto harass or to collect replies.\n1. Creating or forwarding “chain letters”, “Ponzi” or other “pyramid” schemes of any type."
                    }
                ]
            },
            {
                "page": 69,
                "blocks": [
                    {
                        "type": "text",
                        "value": "1. Use of unsolicited e-mail originating from within <Firm Name>’s networks of other\nInternet/Intranet/ Extranet service providers on behalf of, or to advertise, any service\nhosted by <Firm Name> or connected via <Firm Name>’s network.\nvii. Posting the same or similar non-business-related messages to large numbers of Usenet\nnewsgroups (newsgroup spam).\n1. Personal Use - Using a reasonable amount of <FIRM NAME> resources for personal e-\nmails is acceptable, but non work related e-mail shall be saved in a separate folder from\nwork related e-mail. Sending chain letters or joke e-mails from a <FIRM NAME> e-mail\naccount is prohibited. Virus or other malware warnings and mass mailings\nfrom <FIRM NAME> shall be approved by <FIRM NAME> It department before sending. these\nrestrictions also apply to the forwarding of mail received by a <FIRM NAME> employee.\n1. E-mail Retention\n2. Administrative Correspondence - <Firm Name> Administrative Correspondence includes,\nthough is not limited to clarification of established Firm policy, including holidays, time\ncard information, dress code, work place behavior and any legal issues such as\nintellectual property violations. All e-mail with the information sensitivity label\nManagement Only shall be treated as Administrative Correspondence.\n<Firm Name> Administration is responsible for e-mail retention of Administrative\nCorrespondence.\n1. Fiscal Correspondence - <Firm Name> Fiscal Correspondence is all information related to\nrevenue and expense for the Firm. <Firm Name> bookkeeper is responsible for all fiscal\ncorrespondence.\niii. General Correspondence - <Firm Name> General Correspondence covers information that\nrelates to customer interaction and the operational decisions of the business. <Firm Name> is\nresponsible for e-mail retention of General Correspondence.\n1. Ephemeral Correspondence - <Firm Name> Ephemeral Correspondence is by far the\nlargest category and includes personal e-mail, requests for recommendations or review,\ne-mail related to product development, updates and status reports.\n2. Encrypted Communications - <Firm Name> encrypted communications should be stored\nin a manner that protects the confidentiality of the information, but in general,\ninformation should be stored in a decrypted format."
                    }
                ]
            },
            {
                "page": 70,
                "blocks": [
                    {
                        "type": "text",
                        "value": "3. Recovering Deleted E-mail via backup Media - <Firm Name> maintains backups from the\ne-mail server and once a quarter a set of backups is taken out of the rotation and they\nare moved offsite. No effort will be made to remove e-mail from the offsite backups.\n4. Monitoring - <FIRM NAME> employees shall have no expectation of privacy in anything\nthey store, send or receive on the Firm’s e-mail system. <FIRM NAME> may monitor\nmessages without prior notice. <FIRM NAME> is not obliged to monitor e-mail\nmessages.\nVIII. METADATA\n1. Definition - When you create and edit your documents, information about you and the\nedits you make is automatically created and hidden within the document file. Metadata\ncan often be sensitive or confidential information, and can be potentially damaging or\nembarrassing. On its Web site, Microsoft indicates that the following metadata may be\nstored in documents created in all versions of Word, Excel and PowerPoint:\n2. your name and initials (or those of the person who created the file)\n3. the name of your computer\niii. your firm or organization name\n1. the name and type of the printer you printed the document on document revisions,\nincluding deleted text that is no longer visible on the screen vi. document versions\nvii. information about any template used to create the file viii. hidden text ix. comments\n1. Removing Metadata\n2. Microsoft\n3. Disable “allow fat saves” feature.\n4. “Inspect Document” and remove flagged items. “Inspect Document” will vary depending\non your\nsoftware version. In 2010, it is located under File->Info->Check For issues.\n1. Third party software will help identify and clean metadata from your documents if it is\nnecessary to send documents in native format. Verify appropriate software with the It\ndepartment.\n2. WordPerfect"
                    }
                ]
            },
            {
                "page": 71,
                "blocks": [
                    {
                        "type": "text",
                        "value": "1. Uncheck Save Undo/Redo items with document. It can allow you to view hundreds of\npast changes in terms of what text was cut, copied and even deleted from the\ndocument.\n2. There is no software program that easily and automatically removes metadata from\nWordPerfect documents.\niii. Converting to PDF\n1. Converting files to PDF format with Adobe Acrobat or other PDF creators will usually\nstrip out most metadata.\n2. In Acrobat, Select File, then Document Properties to view the summary metadata\ninformation within a PDF file. Add further restrictions on how the document can be\naccessed, used, copied and printed in the Security Options settings as needed.\n1. REMOTE ACCESS\n2. Persons Affected - <FIRM NAME> employees, consultants, vendors, contractors,\nstudents, and others who use mobile computing and storage devices on the network at\nthe <FIRM NAME>.\n3. General Standards - It is the responsibility of <Firm Name> employees, contractors,\nvendors and agents with remote access privileges to <Firm Name>’s corporate network\nto ensure that their remote access connection is given the same consideration as the\nuser’s on-site connection to <Firm Name>.\n4. Requirements\n5. Secure remote access must be strictly controlled. Control will be enforced via one-time\npassword authentication or public/private keys with strong pass-phrases. For\ninformation on creating a strong pass- phrase see the Password policy.\n6. At no time should any <Firm Name> employee provide their login or e-mail password to\nanyone, not even family members.\niii. <Firm Name> employees and contractors with remote access privileges must ensure that\ntheir <Firm Name>-owned or personal computer or workstation, which is remotely connected\nto <Firm Name>’s corporate network, is not connected to any other network at the same time,\nwith the exception of personal networks that are under the complete control of the user.\n1. <Firm Name> employees and contractors with remote access privileges to <Firm\nName>’s corporate network must not use non-<Firm Name> e-mail accounts (i.e.,"
                    }
                ]
            },
            {
                "page": 72,
                "blocks": [
                    {
                        "type": "text",
                        "value": "Hotmail, Yahoo, AOL), or other external resources to conduct <Firm Name> business,\nthereby ensuring that official business is never confused with personal business.\n1. Routers configured for access to the <Firm Name> network must meet minimum\nauthentication requirements .\n2. Reconfiguration of a home user’s equipment for the purpose of split-tunneling or dual\nhoming is not permitted at any time.\nvii. Non-standard hardware configurations must be approved by the IT department, and <Firm\nName> must approve security configurations for access to hardware. viii. All PCs, laptops and\nworkstations that are connected to <Firm Name> internal networks via remote access\ntechnologies must use the most up-to-date anti-virus software (place URL to corporate software\nsite here), this includes personal computers.\n1. Personal equipment that is used to connect to <Firm Name>’s networks must meet the\nrequirements of\n<Firm Name>-owned equipment for remote access.\n1. Individuals who wish to implement non-standard Remote Access solutions to the <Firm\nName>\nproduction network must obtain prior approval from the It department. d. Mobile Computing\nand Storage Devices.\n1. Items covered - Mobile computing and storage devices include, but are not limited to:\nlaptop computers,\nplug-ins, Universal Serial bus (USB) port devices, Compact Discs (CDs), Digital Versatile Discs\n(DVDs), flash drives, smartphones, tablets, wireless networking cards, and any other existing or\nfuture mobile computing or storage device, either personally owned or <Firm Name> owned,\nthat may connect to or access the information systems at the <FIRM NAME>.\n1. Risks - Mobile computing and storage devices are easily lost or stolen, presenting a high\nrisk for unauthorized access and introduction of malicious software to the network at\nthe <FIRM NAME>. these risks must be mitigated to acceptable levels.\niii. Encryption - Portable computing devices and portable electronic storage media that contain\nconfidential, personal, or sensitive <FIRM NAME> information must use encryption or equally\nstrong measures to protect the data while it is being stored."
                    }
                ]
            },
            {
                "page": 73,
                "blocks": [
                    {
                        "type": "text",
                        "value": "1. Database - Databases or portions thereof, which reside on the network at the <FIRM\nNAME>, shall not be downloaded to mobile computing or storage devices.\n2. Minimum Requirements:\n3. Report lost or stolen mobile computing and storage devices to the It department.\n4. Non-departmental owned device that may connect to the <FIRM NAME> network must\nfirst be approved by the It department.\n5. Compliance with the Remote Access policy is mandatory. e. Virtual Private Network\n(VPN)\n6. Persons affected - this policy applies to all <Firm Name> employees, contractors,\nconsultants, temporaries, and other workers including all personnel affiliated with third\nparties utilizing VPNs to access the <Firm Name> network.\n7. Connectivity - Approved <Firm Name> employees and authorized third parties\n(customers, vendors, etc.) may utilize the benefits of VPNs, which are a “user managed”\nservice. This means that the user is responsible for selecting an Internet Service Provider\n(ISP), coordinating installation, installing any required software, and paying associated\nfees.\niii. Requirements\n1. It is the responsibility of employees with VPN privileges to ensure that unauthorized\nusers are not allowed access to <Firm Name> internal networks.\n2. VPN use is to be controlled using either a one-time password authentication such as a\ntoken device or a public/private key system with a strong passphrase.\n1. When actively connected to the corporate network, VPNs will force all traffic to and from\nthe PC\nover the VPN tunnel: all other traffic will be dropped.\n1. Dual (split) tunneling is NOT permitted; only one network connection is allowed.\n2. VPN gateways will be set up and managed by <Firm Name>’s IT department.\n3. All computers connected to <Firm Name> internal networks via VPN or any other\ntechnology must use the most up-to-date anti-virus software that is the corporate\nstandard (provide URL to this software); this includes personal computers."
                    }
                ]
            },
            {
                "page": 74,
                "blocks": [
                    {
                        "type": "text",
                        "value": "4. VPN users will be automatically disconnected from <Firm Name>’s network after thirty\nminutes of inactivity. The user must then logon again to reconnect to the network. Pings\nor other artificial network processes are not to be used to keep the connection open.\n5. the VPN concentrator is limited to an absolute connection time of 24 hours.\n6. Users of computers that are not <Firm Name>-owned equipment must configure the\nequipment to comply with <Firm Name>’s VPN and Network policies.\n7. Only <Firm Name>-approved VPN clients may be used.\n11. By using VPN technology with personal equipment, users must understand that their\nmachines are a de facto extension of <Firm Name>’s network, and as such are subject to the\nsame rules regulations that apply to <Firm Name>-owned equipment, i.e., their machines must\nbe configured to comply with <Firm Name>’s Security Policies.\n1. EMPLOYEE TERMINATION\n2. Removing access - An employee’s credentials shall be inactivated immediately upon\ntermination of\nemployment. this includes, but is not limited to the following:\n1. <Firm Name’s> database\n2. Workstation access iii. E-mail access\n3. Remote access to <Firm Name>’s network\n4. VPN client access\n5. Any other access to <Firm Name>’s network or programs\n6. Returning mobile devices - Any employee in possession of firm portable devices shall\nreturn such devices before exiting the premises on their final day of employment.\nMobile devices include, but are not limited to, the following:\n7. <Firm Name>-owned smartphone ii. <Firm Name>-owned tablet\niii. Laptop\n1. USB drive\n2. CD or DVD containing <Firm Name> client information\n1. VISITOR AND CONTRACTOR ACCESS"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah16",
        "code": "AH16",
        "title": "AEPS Privacy Policy",
        "pages": [
            {
                "page": 75,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH16: AEPS Privacy Policy\n1. Introduction\nWelcome to Virtual Galaxy Infotech Limited’s VPAY (AEPS Service).\nVPAY (AEPS Service) (“us”, “we”, or “our”) operates https://vgipl.com (hereinafter referred to\nas “AEPS Service”).\nOur Privacy Policy governs your visit to https://vgipl.com, and explains how we collect,\nsafeguard and disclose information that results from your use of our AEPS Service.\nWe use your data to provide and improve our AEPS Services. By using AEPS Service, you agree\nto the collection and use of information in accordance with this policy. Unless otherwise defined\nherein, the terms used in this Privacy Policy have the same meanings as in our Terms and\nConditions.\nOur Terms and Conditions (“Terms”) govern all use of our AEPS Service and together with this\nPrivacy Policy constitutes your agreement with us (“agreement”).\n2. Definitions\n1. a) ‘AEPS SERVICE’ means the https://vgipl.com website operated by VPAY (AEPS Service)."
                    }
                ]
            },
            {
                "page": 76,
                "blocks": [
                    {
                        "type": "text",
                        "value": "2. b) ‘PERSONAL DATA’ means data about a living individual who can be identified from\nthose data (or from those and other information either in our possession or likely to\ncome into our possession).\n3. c) ‘USAGE DATA’ is data collected automatically either generated by the use of AEPS\nService or from AEPS Service infrastructure itself (for example, the duration of a page\nvisit).\n4. d)‘COOKIES’ are small files stored on your device (computer or mobile device).\n5. e)‘DATA CONTROLLER’ means a natural or legal person who (either alone or jointly or in\ncommon with other persons) determines the purposes for which and the manner in\nwhich any personal data are, or are to be, processed. For the purpose of this Privacy\nPolicy, we are a Data Controller of your data.\n6. f) ‘DATA PROCESSORS (OR AEPS SERVICE PROVIDERS)’ means any natural or legal\nperson who processes the data on behalf of the Data Controller. We may use the AEPS\nServices of various AEPS Service Providers in order to process your data more effectively.\n7. g) 'DATA SUBJECT’ is any living individual who is the subject of Personal Data.\n8. h) ‘THE USER’ is the individual using our AEPS Service. The User corresponds to the Data\nSubject, who is the subject of Personal Data.\n3. Collection of information and its Use\nWe collect several different types of information as permitted by governing authorities for and\nwork on improving and enhancing your AEPS Service experience.\n4. Types of Data Collected\nPersonal Data\nWhile using our AEPS Service, you may be required to provide us with some information related\nto personal identification that can be used to contact or identify you (“Personal Data”). Such\npersonal data may include, but is not limited to:\n1. a) First name and last name\n2. b) Date of Birth, Age, sex, marital status,\n3. c) Residential/ Business Address, Country, State, Province, ZIP/Postal code, City"
                    }
                ]
            },
            {
                "page": 77,
                "blocks": [
                    {
                        "type": "text",
                        "value": "4. d) Phone number (Home/ Business)\n5. e) Email address\n6. f) Education\n7. g) Income\n8. h) Cookies and Usage Data, etc\nWe may use your Personal contact Data to share with you some business promotional materials\nand other information that may be of interest to you. You may unsubscribe anytime and stop\nreceiving any, or all, of these communications from us as per your discretion.\nUsage Data\nWe may also collect information that your browser sends whenever you visit/ access/ utilize our\nAEPS Service through any device (“Usage Data”).\nThis Usage Data may include information such as your computer’s Internet Protocol address\n(e.g. IP address), browser type, browser version, the pages of our AEPS Service that you access,\nthe time and date of your visit, the time spent on those pages, unique device identifiers and\nother such data.\nLocation Data\nWe may use and store information about your location if you give us permission to do so\n(“Location Data”). We use this data to provide features of our AEPS Service, to improve and\ncustomize our AEPS Service.\nYou can enable or disable location AEPS Services when you use our AEPS Service at any time by\nway of your device settings.\nTracking Cookies Data\nCookies and similar tracking technologies are adopted to track the activity on our AEPS Service\nand some of this information is retained by us.\n5. Use of Data\nVPAY (AEPS Service) uses the collected data for various purposes:\n1. a) to provide, maintain and customize our AEPS Service;\n2. b) to monitor the usage of our AEPS Service;\n3. c) to detect, prevent and address technical issues through customer support;"
                    }
                ]
            },
            {
                "page": 78,
                "blocks": [
                    {
                        "type": "text",
                        "value": "4. d) to update you about changes to our AEPS Service and its Privacy Policy;\n5. e) to allow you to utilize interactive features of our AEPS Service if you opt so;\n6. f) to carry out regular billing and collection in connection with the Agreement signed\nbetween us for AEPS Services;\n7. e) to allow you to utilize interactive features of our AEPS Service if you opt so;\n8. g) to provide you with notices about your account and/or subscription, including\nexpiration and renewal notices, email-instructions, etc.;\n9. h) to provide you with information about add-on services, promotional offers, and\ngeneral information on relevant matters of your concern;\n10. i) to fulfill any other obligation as may be required for statutory compliances.\n6. Storage/ Retention of Data\nYour personal data/ usage data, etc shall be stored with us in consonance with the statutory\nguidelines and only until the required purpose is achieved. We shall store the personal data\nand/or usage data only with an intention to analyse and customize the services, to strengthen\nthe security, to enhance the service functionality and to comply with any legal obligations,\nincluding but not limited to resolution of disputes, enforcement of our legal contracts and\npolicies, etc.\n7. Transfer of Data\nYour information, including Personal Data, is stored and maintained in India as per the\nguidelines of concerned Authorities\nYour consent to this Privacy Policy followed by your submission of such information represents\nyour agreement to that transfer.\nWe will take all the steps reasonably necessary to ensure that your data is treated securely and\nin accordance with this Privacy Policy and no transfer of your Personal Data will take place to an\norganisation or a country unless there are adequate controls in place including the security of\nyour data and other personal information.\n8. Disclosure of Data\nWe may disclose personal information that we collect, or you provide only under the following\ncircumstances:\n1. a) Disclosure for Law Enforcement."
                    }
                ]
            },
            {
                "page": 79,
                "blocks": [
                    {
                        "type": "text",
                        "value": "2. b) Other cases. We may disclose your information also:\n3. i. to our subsidiaries and affiliates;\n4. ii. to contractors, AEPS Service providers, and other third parties we use to support our\nbusiness;\n5. iii. to fulfill the purpose for which you provide it;\n6. iv. for the purpose of including your company’s logo on our website;\n7. v. for any other purpose disclosed by us when you provide the information;\n8. vi. with your consent in any other cases;\n9. vii. if we believe disclosure is necessary or appropriate to protect the rights, property, or\nsafety of the Company, our customers, or others.\n9. Security of Data\nWe take utmost care about the security of your data, at the same time no method of\ntransmission over the Internet or electronic storage is 100% secure. While we strive to use\ncommercially acceptable means to protect your Data, we cannot guarantee its absolute security.\n10. AEPS Service Providers\nWe may during the course of our Services to you, engage third party companies and individuals\nto provide AEPS Service on our behalf in different capacities viz., payment processors, Sub-\ncontractors, service providers, analytics, CI/ CD tools, etc. All these third parties involved in the\nservices shall have access to your Personal Data only for the purpose assigned to them, and are\nobligated not to disclose or use it for any other purpose.\n11. Payments\nIn case we use third-party AEPS Services for payment processing by using paid products or AEPS\nServices, we will not store or collect your payment card details. That information is provided\ndirectly to our third-party payment processors whose use of your personal information is\ngoverned by their Privacy Policy. These payment processors adhere to the standards set by PCI-\nDSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa,\nMastercard, American Express and Discover. PCI-DSS requirements help ensure the secure\nhandling of payment information.\n12. Links to Other Sites"
                    }
                ]
            },
            {
                "page": 80,
                "blocks": [
                    {
                        "type": "text",
                        "value": "Our AEPS Service may contain links of third party sites that are not operated by us. If you click a\nthird party link, you will be directed to that third party’s site. We strongly advise you to review\ntheir respective Privacy Policies for every such site you visit/ access. We have no control over\nand assume no responsibility for the content, privacy policies or practices of any third party\nsites or AEPS Services.\n13. Children’s Privacy\nOur AEPS Services are intended for use only by an adult of a minimum age of 18 years and is not\nintended to be used by any person below the age of 18 years.\n14. Changes/ upgradation to This Privacy Policy\nWe may update/ modify our Privacy Policy from time to time. We will notify you of any updates\nor changes by posting the new Privacy Policy on this page.\nWe will let you know via email and/or a prominent notice on our AEPS Service, prior to the\nchange becoming effective and update “effective date” at the top of this Privacy Policy.\nYou are advised to review this Privacy Policy periodically for any changes. Changes to this\nPrivacy Policy are effective from the date of its posting on this page.\n15. Contact Us\nIf you have any queries/ feedback about this Privacy Policy, please contact us by email:\ninfo@vginfotech.ai"
                    }
                ]
            }
        ]
    },
    {
        "id": "ah17",
        "code": "AH17",
        "title": "Identification of Group Companies, Material Creditors and Material Litigations",
        "pages": [
            {
                "page": 80,
                "blocks": [
                    {
                        "type": "text",
                        "value": "AH17: Identification of Group Companies, Material Creditors and Material Litigations\nA. INTRODUCTION\nThis Policy has been formulated to define the materiality for identification of group companies,\noutstanding litigation and outstanding dues to creditors in respect of Virtual Galaxy Infotech\nLimited (the \"Company\"), pursuant to the disclosure requirements under Schedule VI of\nSecurities and Exchange Board of India (Issue of Capital and Disclosure Requirements)\nRegulations, 2018, as amended from time to time (\"SEBI ICDR Regulations\").\nB. APPLICABILITY AND OBJECTIVE\nThis policy shall be called the 'Policy on Identification of Group Companies, Material Creditors\nand Material Litigations' (\"Policy\")."
                    }
                ]
            },
            {
                "page": 81,
                "blocks": [
                    {
                        "type": "text",
                        "value": "The Board of Directors of the Company (\"Board\") at their meeting held on 29th March, 2025\ndiscussed and approved this Policy. This Policy shall be effective from the date of approval of\nthis Policy by the Board.\nThe Company has adopted this Policy for identification and determination of: (i) material\ncreditors; (ii) material litigations and (iii) Group Companies pursuant to the provisions of SEBI\nICDR Regulations, details of which shall be disclosed in the Offer Documents.\n\"Offer Documents\" means the Draft Red Herring Prospectus, the Red Herring Prospectus and\nthe Prospectus to be filed by the Company in connection with the proposed initial public\noffering of its equity shares with the Securities and Exchange Board of India, Registrar of\nCompanies, Mumbai (\"ROC\") and stock exchanges where the equity shares of the Company are\nproposed to be listed, as applicable.\nAll other capitalised terms not specifically defined in this Policy shall have the same meanings\nascribed to such terms in the Offer Documents.\nIn this Policy, unless the context otherwise requires:(i) Words denoting the singular shall include\nthe plural and vice versa.(ii) References to the words \"include\" or \"including\" shall be construed\nwithout limitation.\nC. POLICY PERTAINING TO THE IDENTIFICATION OF MATERIAL GROUP COMPANIES, MATERIAL\nCREDITORS AND MATERIALLITIGATIONS\nThe Policy with respect to the identification of the group companies, material creditors and\nmaterial litigation shall be as follows:\nIdentification of 'Material' Group Companies:\nRequirement:\nAs per the requirements of the SEBI ICDR Regulations, Group Companies include such\ncompanies as covered under the applicable accounting standards (i.e. Indian Accounting\nStandard 24 (\"Ind AS 24\"), as applicable) as per the restated consolidated financial statements\nfor three (3) financial years and any subsequent stub period preceding the date of the Offer\nDocument, which is included in such Offer Document and also any other companies as\nconsidered material by the board of directors of the Company.\nPolicy on Materiality:\nA company shall be considered material and disclosed as a Group Company if a material adverse\nchange in such company, can lead to a material adverse effect on the Company, and its revenues\nand profitability. Other than companies which constitute part of the related parties of the\nCompany in accordance with the applicable accounting standards (Ind AS 24) as per the latest"
                    }
                ]
            },
            {
                "page": 82,
                "blocks": [
                    {
                        "type": "text",
                        "value": "audited and restated consolidated financial statements of the Company included in the Offer\nDocuments\nFor avoidance of doubt, it is hereby clarified that the Subsidiaries shall not be considered as\nGroup Companies for the purpose of disclosure in the Offer Documents.\nIdentification of Material Creditors\nRequirement:\nAs per the requirements of SEBI ICDR Regulations, the Company shall make relevant disclosures\nin the Offer Documents for outstanding dues to creditors:(i) Based on the policy on materiality\ndefined by the Board and as disclosed in the Offer Document, disclosure for such creditors;\n(ii) Consolidated information on outstanding dues to small scale undertakings and other\ncreditors, separately giving details of number of cases and amount involved; and\n(iii) Complete details about outstanding dues to creditors as per (i) and (ii) above shall be\ndisclosed on the webpage of the Company with a web link thereto in the offer document Policy\non materiality:\nFor identification of material creditors, in terms of point (1) above, a creditor of the Company,\nshall be considered to be material for the purpose of disclosure in the Offer Documents, if\namounts due to such creditor exceeds 10 % of the total trade payables as on the date of the\nrestated standalone financial statements for the last completed fiscal year included in the Offer\nDocuments.\nDisclosures in offer document regarding creditors and SSIS and MSMES\n(i) For creditors identified as 'material*apos; based on the abovementioned Policy, information\non outstanding dues to such material creditors shall be disclosed in the Offer Documents along\nwith details of number of creditors and amount involved on an aggregate basis, as of the date of\nthe latest restated consolidated financial statements included in the Offer Document.\na. For outstanding dues to small scale undertakings (\"SSI\") or a micro small or medium\nenterprise (“MSME”), the disclosure will be based on information available with the Company\nregarding the status of the creditors as an SSI or MSME as defined under Section 2 of the Micro,\nSmall and Medium Enterprises Development Act, 2006, as amended, as has been relied upon by\nthe statutory auditors in preparing their audit report. Information for such identified SSI or\nMSMEs creditors shall be provided in the Offer Documents in the following manner\na. aggregate amounts due to such creditors; and\nb. aggregate number of such creditors.\nas of the date of the latest restated consolidated financial statements included in the Offer\nDocument"
                    }
                ]
            },
            {
                "page": 83,
                "blocks": [
                    {
                        "type": "text",
                        "value": "(ii) In respect of all creditors of the Company, consolidated information on outstanding dues to\nthe creditors shall be disclosed in the Offer Documents comprising the number of creditors and\namount involved on an aggregate basis, as of the date of the latest restated consolidated\nfinancial statements included in the Offer Document\nThe Company shall make relevant disclosures before the Audit Committee/ Board of directors as\nrequired by applicable law from time to time.\nIdentification of Material Litigation\nRequirement:\nAs per the requirements of SEBI ICDR Regulations, the Company shall disclose all the litigation\ninvolving the Company, its subsidiaries, joint ventures, promoters, directors and group\ncompanies related to:\na) if the aggregate monetary claim made by or against the Company, directors, promoters, key\nmanagerial personnel and senior management or its group companies as the case may be, in\nany such pending litigation or arbitration proceeding exceeds the lower of the following in the\nDraft Offer Document/Offer Documents to be filed in pursuance of the initial public offer of the\nequity shares of the Company; ori. two percent of turnover, as per the latest annual restated\nstandalone financial statements of the issuer; orii. two percent of net worth, as per the latest\nannual restated standalone financial statements of the issuer, except in case the arithmetic\nvalue of the net worth is negative; oriii. five percent of the average of absolute value of profit or\nloss after tax, as per the last three annual restated standalone financial statements of the\nissuer.”\nb) such litigation or arbitration proceeding where the monetary liability is not quantifiable, or\nwhich does not fulfill the threshold specified in (a) above, but the outcome of which litigation or\narbitration proceeding could, nonetheless, have a material adverse effect on the business,\noperations, performance, prospectus, financial position or reputation of the Company.”\nD. AMENDMENT\nThe Board (including its duly constituted committees wherever permissible), shall have the\npower to amend any of the provisions of this Policy, substitute any of the provisions with a new\nprovision or replace this Policy entirely with a new Policy. This Policy shall be subject to\nreview/changes as may be deemed necessary and in accordance with regulatory amendments\nfrom time to time."
                    }
                ]
            }
        ]
    }
];
/* =========================================================
   DROP-IN REPLACEMENT
   Keep your existing `policyData` array exactly as it is.
   Replace everything from `function normalizeText` down to
   the end of the file with the code below.
   ========================================================= */

function normalizeText(text) {
    return text
        .replace(/[ \t]+/g, " ")
        .trim();
}

/* ---------------------------------------------------------
   LIST DETECTION
   Matches "•", "1.", "a)", "iv.", "e.", AND compound markers
   like "1. a)" (numbered list ordering an inner lettered
   list, common in AH16). Also matches TOC-style "1 – Text".
   --------------------------------------------------------- */
const LIST_MARKER = /^(?:(?:\d+\.|[a-z]\)|[ivxlcdm]+\.|[a-z]\.|•)\s*)+(?:[–-]\s*)?/i;
const TOC_MARKER = /^\d+\s*[–-]\s+/;

function isListLine(line) {
    const trimmed = line.trim();
    return LIST_MARKER.test(trimmed) && trimmed.replace(LIST_MARKER, "").length > 0
        ? /^(?:•|\d+\.|[a-z]\)|[ivxlcdm]+\.|[a-z]\.)/i.test(trimmed)
        : TOC_MARKER.test(trimmed);
}

function stripListMarker(line) {
    const trimmed = line.trim();
    if (TOC_MARKER.test(trimmed) && !/^(?:\d+\.|[a-z]\)|[ivxlcdm]+\.|[a-z]\.)/i.test(trimmed)) {
        return trimmed.replace(TOC_MARKER, "");
    }
    // Strip ALL leading compound markers in one pass (e.g. "1. a) " -> "")
    return trimmed.replace(LIST_MARKER, "");
}

/* ---------------------------------------------------------
   Removes a redundant leading "AH2: Cyber Security Policy"
   style line from the first block of a policy, since the
   accordion header already shows the title.
   --------------------------------------------------------- */
function stripRedundantHeading(text, code, title) {
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`^${code}:\\s*${escapedTitle}\\s*\\n?`, "i");
    return text.replace(pattern, "").trim();
}

const renderBoldText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

/* ---------------------------------------------------------
   A line that is ENTIRELY "**Bold Like This**" is treated
   as an inline sub-heading (e.g. "Level 2", "Level 3") so it
   visually stands out instead of hiding inside a paragraph.
   --------------------------------------------------------- */
function isStandaloneBoldLine(line) {
    return /^\*\*[^*]+\*\*$/.test(line.trim());
}

function renderTextBlock(text, styles) {
    const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
    const elements = [];
    let paragraph = [];
    let listItems = [];

    const flushParagraph = () => {
        if (paragraph.length) {
            const joined = normalizeText(paragraph.join("\n"));
            if (joined) {
                elements.push(
                    <p key={`p-${elements.length}`}>{renderBoldText(joined)}</p>
                );
            }
            paragraph = [];
        }
    };

    const flushList = () => {
        if (listItems.length) {
            elements.push(
                <ul key={`ul-${elements.length}`} className={styles.contentList}>
                    {listItems.map((item, index) => (
                        <li key={index}>{renderBoldText(normalizeText(item))}</li>
                    ))}
                </ul>
            );
            listItems = [];
        }
    };

    lines.forEach((line) => {
        if (isStandaloneBoldLine(line)) {
            flushParagraph();
            flushList();
            elements.push(
                <h4 key={`h-${elements.length}`} className={styles.subHeading}>
                    {line.replace(/\*\*/g, "")}
                </h4>
            );
        } else if (isListLine(line)) {
            flushParagraph();
            const stripped = stripListMarker(line);
            if (stripped) listItems.push(stripped);
        } else {
            flushList();
            paragraph.push(line);
        }
    });

    flushParagraph();
    flushList();

    return elements;
}

/* ---------------------------------------------------------
   TABLES
   - Drops columns that are empty across every row (fixes
     the ragged AH13/AH14 checklists padded out to 5-8 cols).
   - Only renders a <thead> when the first row actually looks
     like a header (more than one non-empty cell); otherwise
     the "header" is a footnote-fragment artifact and gets
     rendered as a plain body row instead of bold styling.
   --------------------------------------------------------- */
function PolicyTable({ rows }) {
    if (!rows?.length) return null;

    const rawColumnCount = Math.max(...rows.map((row) => row.length));

    const nonEmptyColumns = [];
    for (let c = 0; c < rawColumnCount; c++) {
        const hasContent = rows.some((row) => (row[c] || "").trim().length > 0);
        if (hasContent) nonEmptyColumns.push(c);
    }
    if (nonEmptyColumns.length === 0) return null;

    const cleanedRows = rows.map((row) => nonEmptyColumns.map((c) => row[c] || ""));
    const headerCandidate = cleanedRows[0];
    const headerNonEmptyCount = headerCandidate.filter((cell) => cell.trim()).length;
    const hasRealHeader = headerNonEmptyCount > 1;

    const bodyRows = hasRealHeader ? cleanedRows.slice(1) : cleanedRows;

    return (
        <div className={styles.tableWrapper}>
            <table className={`${styles.policyTable} ${!hasRealHeader ? styles.plainTable : ""}`}>
                {hasRealHeader && (
                    <thead>
                        <tr>
                            {headerCandidate.map((cell, index) => (
                                <th key={index}>{cell}</th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody>
                    {bodyRows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

/* ---------------------------------------------------------
   PAGE / POLICY CONTENT
   Blocks/pages that end up empty after cleanup (e.g. a page
   that was only ever the repeated "AHx: Title" line) are
   silently skipped instead of leaving blank gaps.
   --------------------------------------------------------- */
function PolicyContent({ policy }) {
    let blockCounter = 0;

    const renderedPages = policy.pages
        .map((page) => {
            const renderedBlocks = page.blocks
                .map((block, index) => {
                    if (block.type === "table") {
                        const table = <PolicyTable key={`t-${blockCounter++}`} rows={block.rows} />;
                        return table;
                    }

                    const isFirstBlockOfPolicy = blockCounter === 0;
                    const cleanedValue = isFirstBlockOfPolicy
                        ? stripRedundantHeading(block.value, policy.code, policy.title)
                        : block.value;

                    if (!normalizeText(cleanedValue)) {
                        blockCounter++;
                        return null;
                    }

                    const rendered = (
                        <div className={styles.textBlock} key={`b-${blockCounter}`}>
                            {renderTextBlock(cleanedValue, styles)}
                        </div>
                    );
                    blockCounter++;
                    return rendered;
                })
                .filter(Boolean);

            if (renderedBlocks.length === 0) return null;

            return (
                <div className={styles.policyPage} key={page.page}>
                    {renderedBlocks}
                </div>
            );
        })
        .filter(Boolean);

    if (renderedPages.length === 0) {
        return (
            <div className={styles.policyBody}>
                <div className={styles.emptyPolicy}>
                    Full details for this policy are being finalized. Please contact{" "}
                    <a href="mailto:info@vginfotech.ai">info@vginfotech.ai</a> for the latest version.
                </div>
            </div>
        );
    }

    return <div className={styles.policyBody}>{renderedPages}</div>;
}

function Policies() {
    const [openPolicy, setOpenPolicy] = useState(null);

    const togglePolicy = (id) => {
        setOpenPolicy((current) => (current === id ? null : id));
    };

    return (
        <main className={styles.policiesPage}>
            <section className={styles.policiesHero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.heroEyebrow}>Legal</span>
                        <h1 className={styles.heroTitle}>
                            <span>Policies</span>
                        </h1>
                        <p className={styles.heroDescription}>
                            Review the policies and procedures governing Virtual Galaxy
                            Infotech and its services.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.policiesContent}>
                <div className="container">
                    <div className={styles.contentLayout}>
                        <div className={styles.accordion}>
                            {policyData.map((policy) => {
                                const isOpen = openPolicy === policy.id;

                                return (
                                    <section
                                        className={`${styles.accordionItem} ${isOpen ? styles.isOpen : ""}`}
                                        key={policy.id}
                                    >
                                        <button
                                            type="button"
                                            className={styles.accordionHeader}
                                            onClick={() => togglePolicy(policy.id)}
                                            aria-expanded={isOpen}
                                            aria-controls={`policy-${policy.id}`}
                                        >
                                            <span className={styles.accordionTitle}>
                                                <strong>{policy.title}</strong>
                                            </span>
                                            <span className={styles.accordionIcon} aria-hidden="true">
                                                <span />
                                                <span />
                                            </span>
                                        </button>

                                        <div
                                            id={`policy-${policy.id}`}
                                            className={styles.accordionPanel}
                                            hidden={!isOpen}
                                        >
                                            <PolicyContent policy={policy} />
                                        </div>
                                    </section>
                                );
                            })}
                        </div>

                        <section className={styles.relatedSection}>
                            <h3>Related Information</h3>
                            <div className={styles.relatedLinks}>
                                <Link to="/terms">Terms of Use</Link>
                                <Link to="/privacy">Privacy Policy</Link>
                                <Link to="/disclaimer">Disclaimer</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Policies;