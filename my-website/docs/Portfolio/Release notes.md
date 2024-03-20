# Release notes
The 22.4 release version of Peregrine brings several new features, enhancements, and fixed
issues.
## What’s new
The following section contains information about new features implemented in the 22.4 version.
### PER-992, MFA
We have enhanced the security of the user profile with two-factor authentication. The
administrator receives a unique one-time password valid for 10 minutes when logging in.
Administrators can log in using one of the recommended Android or iOS authentication apps, available on the system requirements page.
### PER-814, Multiple language support
Administrators can now set a default language for users, based on their geographical location.
To set the default language, administrators must upload a .json file with a translation of the UI
elements. Once the file is uploaded, all users belonging to a certain geo-group will see the
Peregrine interface in the selected language. Administrators and users will have the ability to
revert the language to English in the **My Profile** section.
## Enhancements
The following section contains information about improvements of the existing functionalities.
### PER-884, Event coordinator
Administrators can now edit the start and end dates in the **Event Coordinator** module. You can
configure permission for this feature in **System Preferences** > **Administrative Permissions**.
### PER-782, UI and UX updates
Administrators can now set the primary, secondary, and tertiary colors of the user portal. The
**Branding** feature now enables administrators to set the look and feel of the login page in
accordance with their brand guidelines. Administrators can now add links to their corporate
website on the login page, as well as links to their social media accounts.
 
## Fixed issues
The following support issues have been fixed in the 22.4 version.
### PER-1145, User profile
Administrators can now update user details for multiple accounts simultaneously. Previously,
this action resulted in an error.
### PER-1549, Dashboard
The 500 error message no longer displays when reloading the Dashboard page.
## Known issues
The following table contains support issues reported in previous versions.

|Jira number|Module|Issue description|
|-----------|------|-----------------------
|PER-1014|Email|Currently it's not possible to send an email with multiple attachments to more than 30 recipients at the same time.|
|PER-1332|Browser|The **Export to Excel** feature currently doesn't work in the Safari browser.|